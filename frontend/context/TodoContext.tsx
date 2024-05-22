import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo";
import {TodoEndpoints} from "Frontend/generated/endpoints.js";

type TodoContextType = {
    activeTodos: Todo[];
    doneTodos: Todo[];
    task: string;
    setTask: (task: string) => void;
    targetCount: number;
    setTargetCount: (count: number) => void;
    addTodo: (task: string, targetCount: number) => void;
    updateTodo: (todo: Todo, done: boolean) => void;
    selectTodo: number | null;
    setSelectTodo: (id: number) => void;
    incrementCurrentCount: () => void;
    deleteDoneTodo: () => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({children}: { children: ReactNode }) => {

    const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
    const [doneTodos, setDoneTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');
    const [targetCount, setTargetCount] = useState(1)
    const [selectTodo, setSelectTodo] = useState<number | null>(null)

    useEffect(() => {
        TodoEndpoints.findAllActive().then(setActiveTodos);
        TodoEndpoints.findAllDone().then(setDoneTodos);
    }, []);

    const addTodo = async (task: string, targetCount: number) => {
        if (task.trim() == null && targetCount <= 0) {
            alert("Please enter a valid task and estimated amount for your Pomodoro")
            return;
        }
        try {
            const todo = await TodoEndpoints.add(task, targetCount);
            if (todo) {
                setActiveTodos([...activeTodos, todo]);
                setTask('');
                setTargetCount(1);
            }
        } catch (error) {
            console.error("Failed to add todo:", error);
            alert("An error occurred while adding a todo. Please check your Input in the add Todo Text field.")
        }
    };

    const deleteDoneTodo = async () => {
        await TodoEndpoints.deleteDoneTodos();
        setDoneTodos([]);
    };

    const updateTodo = async (todo: Todo, done: boolean) => {
        const saved = await TodoEndpoints.update({...todo, done});
        if (saved) {
            if (done) {
                setActiveTodos(prevActiveTodos => prevActiveTodos.filter(existing => existing.id !== saved.id));
                setDoneTodos(prevDoneTodos => [...prevDoneTodos, saved]);
            } else {
                setActiveTodos(prevActiveTodos => {
                    return prevActiveTodos.map(existing => existing.id === saved.id ? saved : existing);
                });
                setDoneTodos(prevDoneTodos => prevDoneTodos.filter(existing => existing.id !== saved.id));
            }
        }
    };

    const handleTodoSelect = (id: number) => {
        setSelectTodo(id);
    }


    const incrementCurrentCount = async () => {
        if (selectTodo !== null) {
            const todo = activeTodos.find(t => t.id === selectTodo);
            if (todo) {
                const updatedCount = todo.currentCount + 1;
                const isDone = updatedCount >= todo.targetCount;
                await updateTodo({...todo, currentCount: updatedCount, done: isDone}, isDone);
                setSelectTodo(null)
            }
        }
    };

    return (
        <TodoContext.Provider value={{
            task,
            setTask,
            targetCount,
            setTargetCount,
            activeTodos,
            doneTodos,
            addTodo,
            updateTodo,
            selectTodo,
            setSelectTodo: handleTodoSelect,
            incrementCurrentCount,
            deleteDoneTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error("useTodos must be used within a TodoProvider");
    }
    return context;
};
