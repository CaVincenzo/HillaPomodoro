import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import React from "react";
import {useNavigate} from "react-router-dom";

export function PomodoroView() {

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
                    <a onClick={()=> navigate(`/`)}>Pomotime</a>
                </Tab>

                <Tab>
                    <a>What is Pomodoro?</a>
                </Tab>

                <Tab>
                    <a onClick={()=> navigate(`/settings`)}>Pomodoro Settings</a>
                </Tab>
            </Tabs>

            <div>
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