import {createBrowserRouter, RouteObject} from 'react-router-dom';
import {TodoView} from "Frontend/views/TodoView";
import {PomodoroView} from "Frontend/views/PomodoroView";
import React from "react";


const routing = [
    {path: '/todo', element: <TodoView/>},
    {path: '/pomodoro', element: <PomodoroView/>}

] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);
