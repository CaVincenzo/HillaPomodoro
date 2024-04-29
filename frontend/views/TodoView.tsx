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
    const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');
    const [doneTodos, setDoneTodos] = useState<Todo[]>([]);

    // Daten von Server laden
    useEffect(() => {
          TodoEndpoints.findAllActive().then(setActiveTodos);
          TodoEndpoints.findAllDone().then(setDoneTodos);
    }, []);


    async function addTodo() {
        const saved = await TodoEndpoints.add(task)
        if (saved) {
            setActiveTodos([...activeTodos, saved]);
            setTask('')
        }
    }

    async function updateTodo(todo: Todo, done: boolean) {
        const saved = await TodoEndpoints.update({...todo, done});
        if (saved) {
            if (done) {
                // If done, remove the from the activeTodos array
                setActiveTodos(prevActiveTodos => prevActiveTodos.filter(existing => existing.id !== saved.id));
                // Add  to the doneTodos array
                setDoneTodos(prevDoneTodos => [...prevDoneTodos, saved]);
            } else {
                // If undone, move the back to the activeTodos array
                setActiveTodos(prevActiveTodos => [...prevActiveTodos, saved]);
                // Remove from the doneTodos array
                setDoneTodos(prevDoneTodos => prevDoneTodos.filter(existing => existing.id !== saved.id));
            }
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
                    <a onClick={() => navigate('pomodoro')}>What is Pomodoro?</a>
                </Tab>
            </Tabs>

            <div className={"flex gap-m center"}>
                <TextField value={task} placeholder={'add Todo'} onChange={e => setTask(e.target.value)}/>
                <Button theme={"primary"} onClick={addTodo}>Add</Button>
            </div>

            <div>
                <h2>Active Todos</h2>
                {activeTodos.map(todo => (
                    <div key={todo.id}>
                        <Checkbox checked={todo.done} onCheckedChanged={e => updateTodo(todo, e.detail.value)}/>
                        <span>{todo.task}</span>
                    </div>
                ))}
            </div>

            <div>
                <h2>Completed Todos</h2>
                {doneTodos.map(todo => (
                    <div key={todo.id}>
                        <Checkbox checked={todo.done} onCheckedChanged={e => updateTodo(todo, e.detail.value)}/>
                        <span>{todo.task}</span>
                    </div>
                ))}
            </div>

        </AppLayout>
    );
}