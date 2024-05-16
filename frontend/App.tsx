import router from 'Frontend/util/routes';
import {RouterProvider} from 'react-router-dom';
import {PomodoroProvider} from "Frontend/context/PomodoroTimerContext";
import {TodoProvider} from "Frontend/context/TodoContext";

export default function App() {

    return (
        <PomodoroProvider>
            <TodoProvider>
                <RouterProvider router={router}/>
            </TodoProvider>
        </PomodoroProvider>);

}
