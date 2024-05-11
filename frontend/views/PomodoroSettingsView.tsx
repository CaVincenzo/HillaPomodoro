import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import {usePomodoroSettings} from "Frontend/context/PomodoroTimerContext";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";

export function PomodoroSettingsView() {

    const {pomodoroMinutes, setPomodoroMinutes, breakMinutes, setBreakMinutes} = usePomodoroSettings();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSave = () => {
        setShowConfirmation(true); // Show confirmation message
        setTimeout(() => setShowConfirmation(false), 3000); // Hide message after 3 seconds
    };

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
                    <NavLink to='/settings'>Pomodoro Settings </NavLink>
                </Tab>
            </Tabs>

            <h1>Pomodoro Settings</h1>
            <div>
                <TextField label="Pomodoro Minutes" value={String(pomodoroMinutes)}
                           onChange={(e) => setPomodoroMinutes(Number(e.target.value))}/>
            </div>
            <div><TextField label="Break Minutes" value={String(breakMinutes)}
                            onChange={(e) => setBreakMinutes(Number(e.target.value))}/></div>

            <div>
                <Button onClick={handleSave}>Save</Button>
                {showConfirmation && (
                    <p>Timers updated! Pomodoro: {pomodoroMinutes} minutes, Break: {breakMinutes} minutes.</p>
                )}
            </div>


        </AppLayout>
    );
}