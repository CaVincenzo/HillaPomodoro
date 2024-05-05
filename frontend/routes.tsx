import {createBrowserRouter, RouteObject} from 'react-router-dom';
import {TodoView} from "Frontend/views/TodoView";
import {PomodoroView} from "Frontend/views/PomodoroView";
import React from "react";
import {PomodoroSettingsView} from "Frontend/views/PomodoroSettingsView";


const routing = [
    {path: '/', element: <TodoView/>},
    {path: '/pomodoro', element: <PomodoroView/>},
    {path: '/settings', element: <PomodoroSettingsView/>}

] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);
