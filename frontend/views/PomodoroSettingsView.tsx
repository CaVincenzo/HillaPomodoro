import React from "react";
import {useNavigate} from "react-router-dom";
import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";

export function PomodoroSettingsView() {

    const navigate = useNavigate()

    const h1Style: React.CSSProperties = {
        fontSize: 'var(--lumo-font-size-l)',
        left: 'var(--lumo-space-l)',
        margin: 0,
        position: 'absolute',
    };

    const tabsStyle = {
        margin: 'auto',
    };

    return (
        <AppLayout>
            <h1 slot="navbar" style={h1Style}>
                Pomodoro
            </h1>
            <Tabs slot="navbar" style={tabsStyle}>
                <Tab>
                    <a onClick={() => navigate(`/`)}>Pomotime</a>
                </Tab>
                <Tab>
                    <a onClick={() => navigate('/pomodoro')}> What is Pomodoro?</a>
                </Tab>
                <Tab>
                    <a>Pomodoro Settings</a>
                </Tab>
            </Tabs>
            <div>
                <h2>Set your Pomodoro Time and Break Time</h2>
            </div>


        </AppLayout>
    );
}