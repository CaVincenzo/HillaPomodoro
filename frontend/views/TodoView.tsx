import React, {useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo";
import {TodoEndpoints} from "Frontend/generated/endpoints.js";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {Checkbox} from "@hilla/react-components/Checkbox";
import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import {NavLink} from "react-router-dom";
import useTimer from "Frontend/context/useTimer";
import {usePomodoroSettings} from "Frontend/context/PomodoroTimerContext";
import 'Frontend/themes/todo/styles.css'

export function TodoView() {
    const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');
    const [doneTodos, setDoneTodos] = useState<Todo[]>([]);

    const {pomodoroMinutes, breakMinutes} = usePomodoroSettings();
    const {minutes, seconds, startTimer, pauseTimer, stopTimer} = useTimer({
        initialPomodoroMinutes: pomodoroMinutes,
        initialBreakMinutes: breakMinutes
    });

    // fetch data from server
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

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

//https://github.com/vaadin/flow/issues/19200, AppLayout bug current open issue at Hilla.

    return (
        <AppLayout>
            <h1 slot="navbar" className={"h1Style"}>
                Pomodoro
            </h1>
            <Tabs slot="navbar" className={"tabsStyle"}>
                <Tab>
                    <NavLink to='/'> Pomotime</NavLink>
                </Tab>

                <Tab>
                    <NavLink to='/pomodoro'> What is Pomodoro?</NavLink>

                </Tab>

                <Tab>
                    <NavLink to='/settings'>Settings </NavLink>
                </Tab>
            </Tabs>

            <div className={"timer"}>
                {timerMinutes}:{timerSeconds}
            </div>

            <div className={"flex gap-m center"}>
                <Button theme={"primary"} onClick={startTimer}>
                    Play
                </Button>
                <Button theme={"primary"} onClick={pauseTimer}>
                    Pause
                </Button>
                <Button theme={"primary"} onClick={stopTimer}>
                    Stop
                </Button>
            </div>

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