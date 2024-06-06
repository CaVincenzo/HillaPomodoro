import {createBrowserRouter, RouteObject} from 'react-router-dom';
import {PomodoroView} from "Frontend/views/PomodoroView";
import {DescriptionView} from "Frontend/views/DescriptionView";
import React from "react";
import {PomodoroSettingsView} from "Frontend/views/PomodoroSettingsView";
import '../views/login-view';

const routing = [
    {path: "/login", Component: 'login-view'},
    {path: '/', element: <PomodoroView/>},
    {path: '/pomodoro', element: <DescriptionView/>},
    {path: '/settings', element: <PomodoroSettingsView/>}

] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);
