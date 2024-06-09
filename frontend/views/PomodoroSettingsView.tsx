import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {AppLayout} from "@hilla/react-components/AppLayout";
import {Tabs} from "@hilla/react-components/Tabs";
import {Tab} from "@hilla/react-components/Tab";
import {usePomodoroSettings} from "Frontend/context/PomodoroTimerContext";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {useTodos} from "Frontend/context/PomodoroContext";

export function PomodoroSettingsView() {

    const {pomodoroMinutes, setPomodoroMinutes, breakMinutes, setBreakMinutes} = usePomodoroSettings();
    const [localPomodoroTime, setLocalPomodoroTime] = useState<number>()
    const [localBreakTime, setLocalBreakTime] = useState<number>()
    const {handleLogout} = useTodos();
    const handlePomodoroTimeChange = (value: string) => {
        if (/^\d*$/.test(value)) {
            setLocalPomodoroTime(Number(value));
        }
    };

    const handleBreakTimeChange = (value: string) => {
        if (/^\d*$/.test(value)) {
            setLocalBreakTime(Number(value));
        }
    };

    const handleSave = () => {
        const newPomodoroMinutes = Number(localPomodoroTime);
        const newBreakMinutes = Number(localBreakTime);

        if (newPomodoroMinutes && newBreakMinutes != undefined) {
            setPomodoroMinutes(newPomodoroMinutes);
            setBreakMinutes(newBreakMinutes);
        } else{
            alert("Please write only full digits in the Text Field")
        }
    };

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

            <div className={"settings-field-container"}>
                <div className={"settings-title"}>Pomodoro Settings</div>
                <div className={"settings-text-fields"}>
                    <TextField className={"settings-text-fields"} label="Pomodoro Minutes"
                               placeholder={"Set your Pomodoro Time"} value={localPomodoroTime? localPomodoroTime.toString(): ""}
                               onChange={(e) => handlePomodoroTimeChange(e.target.value)}/>
                </div>
                <div className={"settings-text-fields"}>
                    <TextField className={"settings-text-fields"} label="Break Minutes"
                               placeholder={"Set your Break Time"}
                               value={localBreakTime ? localBreakTime.toString() : ""}
                               onChange={(e) => handleBreakTimeChange(e.target.value)}/></div>

                <div className={"settings-text-fields"}>

                    <TextField className={"settings-text-fields"} label={"Current Pomodoro Time"} readonly={true}
                    value={`${pomodoroMinutes}`}></TextField>

                    <TextField className={"settings-text-fields"} label={"Current Break Time"} readonly={true}
                               value={`${breakMinutes}`}></TextField>
                </div>

                <div>
                    <Button theme={"primary"} className={"save-button"} onClick={handleSave}>Save</Button>
                </div>
            </div>
        </AppLayout>
    );
}