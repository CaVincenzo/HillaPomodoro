import React, {useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo";
import {TodoEndpoints} from "Frontend/generated/endpoints.js";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {Checkbox} from "@hilla/react-components/Checkbox";
import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import {useNavigate} from "react-router-dom";


export function TodoView() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');

    //Todo list of done Todo
    //const [done, setDone]= useState()

    // to call the server
    useEffect(() => {
        TodoEndpoints.findAll().then(setTodos);
    }, []);


    async function addTodo() {
        const saved = await TodoEndpoints.add(task)
        if (saved) {
            setTodos([...todos, saved]);
            setTask('')
        }
    }

    async function updateTodo(todo: Todo, done: boolean) {
        const saved = await TodoEndpoints.update({...todo, done});
        if (saved) {
            setTodos(todos.map(existing => existing.id == saved.id ? saved : existing))
        }
    }

    const h1Style: React.CSSProperties = {
        fontSize: 'var(--lumo-font-size-l)',
        left: 'var(--lumo-space-l)',
        margin: 0,
        position: 'absolute',
    };

    const tabsStyle = {
        margin: 'auto',
    };
    //

    const navigate = useNavigate()

    return (
        <AppLayout>
            <h1 slot="navbar" style={h1Style}>
                Pomodoro
            </h1>

            <Tabs slot="navbar" style={tabsStyle}>
                <Tab>
                    <a>Pomotime</a>
                </Tab>

                <Tab>
                    <a onClick={()=> navigate("/pomodoro")}>What is Pomodoro?</a>
                </Tab>
            </Tabs>

            <div className={"flex gap-m center"}>
                <TextField value={task} placeholder={'add Todo'} onChange={e => setTask(e.target.value)}/>
                <Button theme={"primary"} onClick={addTodo}>Add</Button>
            </div>

            {todos.map(todo => (
                <div key={todo.id}>
                    <Checkbox  checked={todo.done} onCheckedChanged={e => updateTodo(todo, e.detail.value)}/>
                    <span>{todo.task}</span>
                </div>
            ))}


        </AppLayout>
    );
}