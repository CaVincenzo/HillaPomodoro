import router from 'Frontend/routes.js';
import {RouterProvider} from 'react-router-dom';
import {PomodoroProvider} from "Frontend/context/PomodoroTimerContext";

export default function App() {

    return (
        <PomodoroProvider>
            <RouterProvider router={router}/>
        </PomodoroProvider>);

}
