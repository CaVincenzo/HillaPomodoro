import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "@hilla/react-components/Button";
import {useTodos} from "Frontend/context/PomodoroContext";



export function DescriptionView() {

    const {handleLogout} = useTodos();

    return (
        <AppLayout className={"pomo-background"}>
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

                <Tab>
                    <Button className={"timer-button"} onClick={handleLogout}> Abmelden</Button>
                </Tab>
            </Tabs>

            <div className={"pomodoro-text-container"}>
                <div className={"text-title"}>What is the Pomodoro Technique?</div>
                <div className={"text-pomodoro"}>
                    The Pomodoro Technique is a time management method based on 25-minute stretches of focused work,
                    interspersed with five-minute breaks.
                    Each work interval is called a pomodoro, the Italian word for tomato.
                    The Pomodoro Technique was developed by Francesco Cirillo as a means of achieving greater
                    productivity in work and study.
                    The Pomodoro Technique essentially trains individuals to focus on tasks more effectively by limiting
                    the length of time they attempt to maintain that focus and ensuring restorative breaks from the
                    effort.
                    Additionally, the method assists individuals in overcoming their tendencies to procrastinate or
                    multitask, both of which have been demonstrated to impair productivity.
                </div>
            </div>

            <div className={"pomodoro-text-container"}>
                <div className={"text-title"}>How to use the Pomodoro Timer?</div>
                <div className={"text-pomodoro"}>
                    <ol>
                        <li>Optional: Set your Pomodoro Timers in the Settings</li>
                        <li>Add a Task to work on</li>
                        <li>Set estimate pomodoros for each task</li>
                        <li>Select the task to work on</li>
                        <li>Start timer and focus on the task</li>
                        <li>Take a break</li>
                        <li>Repeat</li>
                        <li>Delete your Done Todos</li>
                        <li>Have Fun :)</li>
                    </ol>
                </div>
            </div>
        </AppLayout>
    );
}