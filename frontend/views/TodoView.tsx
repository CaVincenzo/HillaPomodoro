import React from "react";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import {NavLink} from "react-router-dom";
import useTimer from "Frontend/context/UseTimer";
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

    return (
        <AppLayout className={"pomo-background"}>
            {/*//https://github.com/vaadin/flow/issues/19200, AppLayout bug*/}
            <h1 slot="navbar" className={"h1Style"}>Pomodoro</h1>
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
                    <TextField className={"timer-title"} value={isPomodoroTime ? "Learning Time" : "Break Time"}
                               readonly={true}
                               style={{marginBottom: "1rem"}}
                    ></TextField>
                </div>
                <div className={"timer-button"}>
                    <Button theme={"primary"} onClick={startTimer}>Play</Button>
                    <Button theme={"primary"} onClick={pauseTimer}>Pause</Button>
                    <Button theme={"primary"} onClick={stopTimer}>Stop</Button>
                </div>
            </div>

            <div className={"text-field-container"}>
                <TextField className={"text-field"} placeholder={"add Todo"} value={task}
                           onChange={e => setTask(e.target.value)}/>
                <TextField className={"text-field"} placeholder={"Est Pomodoros"} value={targetCount.toString()}
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
                            <div className={`icon not-done`}>
                                <Icon icon="vaadin:ellipsis-circle-o" style={{color: 'red'}}/>
                            </div>
                            <TextField className={"task"} value={todo.task} readonly={true}/>
                        </div>
                        <div className="progress">{todo.currentCount}/{todo.targetCount}</div>
                    </div>
                ))}

                <h2 className="tasks-title">Completed Todos</h2>
                {doneTodos.map(todo => (
                    <div key={todo.id} className="todo-item">
                        <div className="task">
                            <div className={`icon done`}>
                                <Icon icon="vaadin:check-circle-o" style={{color: 'green'}}/>
                            </div>
                            <TextField className={"task"} value={todo.task} readonly={true}/>
                        </div>
                        <div className="progress">{todo.currentCount}/{todo.targetCount}</div>
                    </div>
                ))}

                <Button theme={"primary"} onClick={() => deleteDoneTodo()}>Delete Done Todos</Button>
            </div>
        </AppLayout>
    );
}