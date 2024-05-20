import React from "react";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import {NavLink} from "react-router-dom";
import useTimer from "Frontend/context/useTimer";
import {usePomodoroSettings} from "Frontend/context/PomodoroTimerContext";
import 'Frontend/themes/todo/styles.css'
import {useTodos} from "Frontend/context/TodoContext";
import {Icon} from "@hilla/react-components/Icon";
import '@vaadin/icons';

export function TodoView() {
    const {
        task,
        setTask,
        targetCount,
        setTargetCount,
        activeTodos,
        doneTodos,
        addTodo,
        selectTodo,
        setSelectTodo,
        deleteDoneTodo,
    } = useTodos();
    const {pomodoroMinutes, breakMinutes} = usePomodoroSettings();
    const {minutes, seconds, isPomodoroTime, startTimer, pauseTimer, stopTimer} = useTimer({
        initialPomodoroMinutes: pomodoroMinutes,
        initialBreakMinutes: breakMinutes
    });


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

//TODO css-styling, remove Textfeld-border, Notification with Pomodoro Start, Break Start

    return (
        <AppLayout>
            {/*//https://github.com/vaadin/flow/issues/19200, AppLayout bug*/}
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


            <div className={"timer-container"}>
                <div className={"timer"}>
                    {timerMinutes}:{timerSeconds}
                </div>
                <div>
                    <TextField className={"timer-titel"} value={isPomodoroTime ? "Learning Time" : "Break Time"}
                               readonly={true}
                    ></TextField>
                </div>

            </div>


            <div className={"flex gap-m center"}>
                <Button theme={"primary"} onClick={startTimer}>Play</Button>
                <Button theme={"primary"} onClick={pauseTimer}>Pause</Button>
                <Button theme={"primary"} onClick={stopTimer}>Stop</Button>
            </div>

            <div className={"flex gap-m center"}>
                <TextField label={'add Todo'} value={task} onChange={e => setTask(e.target.value)}/>
                <TextField label={"Est Pomodoros"} value={targetCount.toString()}
                           onChange={e => setTargetCount(parseInt(e.target.value) || 1)}/>
                <Button theme={"primary"} onClick={() => addTodo(task, targetCount)}>Add</Button>
            </div>

            <div className="todo-container">
                <h2 className="tasks-title">Active Todos</h2>
                {activeTodos.map(todo => (
                    <div key={todo.id}
                         className={`todo-item ${selectTodo === todo.id ? 'selected' : ''}`}
                         onClick={() => todo.id !== undefined && setSelectTodo(todo.id)}>

                        <div className="task">
                            <span className={`icon not-done`}>
                                <Icon icon="vaadin:ellipsis-circle-o" style={{color: 'red'}}/>
                            </span>
                            <TextField value={todo.task} readonly={true}/>
                        </div>
                        <span className="progress">{todo.currentCount}/{todo.targetCount}</span>
                    </div>
                ))}
            </div>

            <div className="todo-container">
                <h2 className="tasks-title">Completed Todos</h2>
                {doneTodos.map(todo => (
                    <div key={todo.id} className="todo-item">
                        <div className="task">
                           <span className={`icon done`}>
                                <Icon icon="vaadin:check-circle-o" style={{color: 'green'}}/>
                            </span>
                            <TextField value={todo.task} readonly={true}/>
                        </div>
                        <span className="progress">{todo.currentCount}/{todo.targetCount}</span>
                    </div>
                ))}
                <Button theme={"primary"} onClick={() => deleteDoneTodo()}>Clean Done Todos</Button>
            </div>

        </AppLayout>
    );
}