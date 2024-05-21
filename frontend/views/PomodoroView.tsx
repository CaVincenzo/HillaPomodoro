import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import React from "react";
import {NavLink} from "react-router-dom";

export function PomodoroView() {

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
            </Tabs>

            <div className={"text-field-container"}>
                <h2>What is Pomodoro Technique?</h2>
                <p>
                    The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study.
                    The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,
                    separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato',
                    after the tomato-shaped kitchen timer that Cirillo used as a university student.
                </p>
            </div>

        </AppLayout>
    );
}