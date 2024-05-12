import router from 'Frontend/util/routes';
import {RouterProvider} from 'react-router-dom';
import {PomodoroProvider} from "Frontend/context/PomodoroTimerContext";

export default function App() {

    return (
        <PomodoroProvider>
            <RouterProvider router={router}/>
        </PomodoroProvider>);

}
