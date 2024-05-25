import router from 'Frontend/util/routes';
import {RouterProvider} from 'react-router-dom';
import {GlobalTimerProvider} from "Frontend/context/PomodoroTimerContext";
import {PomodoroProvider} from "Frontend/context/PomodoroContext";

export default function App() {

    return (
        <GlobalTimerProvider>
            <PomodoroProvider>
                <RouterProvider router={router}/>
            </PomodoroProvider>
        </GlobalTimerProvider>);

}
