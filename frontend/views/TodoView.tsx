import {useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo";
import {TodoEndpoints} from "Frontend/generated/endpoints.js";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import todo from "Frontend/generated/com/example/application/Todo";
import {Checkbox} from "@hilla/react-components/Checkbox";
import {update} from "Frontend/generated/TodoEndpoints";

export function TodoView(){
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');

    useEffect(() => {
       // @ts-ignore
        TodoEndpoints.findAll().then(setTodos);
    },[]);


    async function addTodo() {
        const saved = await TodoEndpoints.add(task)
        if(saved){
            setTodos([...todos, saved]);
            setTask('')
        }
    }

    async function updateTodo(todo: Todo, done: boolean) {
        const saved = await TodoEndpoints.update({...todo,done});
        if(saved){
            setTodos(todos.map(existing => existing.id == saved.id ? saved : existing))
        }
    }

    return (
        <div className={"p-m"}>
            <h1>To Do with Pomodoro</h1>

            <div className={"flex gap-s"}>
                <TextField value={task} onChange={e => setTask(e.target.value)}/>
                <Button theme={"primary"} onClick={addTodo}>Add</Button>
            </div>

            {todos.map(todo => (
                <div key={todo.id}>
                    <Checkbox checked={todo.done} onCheckedChanged={e => updateTodo(todo,e.detail.value)}/>
                    <span>{todo.task}</span>
                </div>
            ))}
        </div>
    );
}