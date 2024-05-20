import {useEffect, useState} from 'react';
import {useTodos} from "Frontend/context/TodoContext";

interface UseTimerArgs {
    initialPomodoroMinutes: number;
    initialBreakMinutes: number;
}

function useTimer({initialPomodoroMinutes, initialBreakMinutes}: UseTimerArgs) {
    const [minutes, setMinutes] = useState<number>(initialPomodoroMinutes);
    const [seconds, setSeconds] = useState<number>(0);
    const [isPomodoroTime, setIsPomodoroTime] = useState<boolean>(true);
    const [timerRunning, setTimerRunning] = useState<boolean>(false);
    const {incrementCurrentCount,selectTodo} = useTodos();

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (timerRunning) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        setIsPomodoroTime(!isPomodoroTime);
                        setMinutes(isPomodoroTime ? initialBreakMinutes : initialPomodoroMinutes);
                        setSeconds(0);
                        if (isPomodoroTime) {
                            incrementCurrentCount()
                        }
                        if (minutes === 0) {
                            setTimerRunning(false);
                        }
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [timerRunning, seconds, minutes, isPomodoroTime, initialPomodoroMinutes, initialBreakMinutes]);

    const startTimer = () => {
        if (isPomodoroTime) {
            if (selectTodo === null || selectTodo === undefined) {
                alert("Please select a Todo from the active Todos before starting the timer.");
                return;
            }
        }
        setTimerRunning(true);
    };


    const pauseTimer = () => {
        setTimerRunning(false);
    };

    const stopTimer = () => {
        setTimerRunning(false);
        setMinutes(isPomodoroTime ? initialBreakMinutes : initialPomodoroMinutes);
        setIsPomodoroTime(!isPomodoroTime); // Toggle the mode for the next session
        setSeconds(0);
        if (isPomodoroTime) {
            incrementCurrentCount();
        }
    };


    return {
        minutes,
        seconds,
        isPomodoroTime,
        startTimer,
        pauseTimer,
        stopTimer
    };
}

export default useTimer;
