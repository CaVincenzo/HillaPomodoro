import {useEffect, useState} from 'react';

interface UseTimerArgs {
    initialPomodoroMinutes: number;
    initialBreakMinutes: number;
}

function useTimer({initialPomodoroMinutes, initialBreakMinutes}: UseTimerArgs) {
    const [minutes, setMinutes] = useState<number>(initialPomodoroMinutes);
    const [seconds, setSeconds] = useState<number>(0);
    const [isPomodoroTime, setIsPomodoroTime] = useState<boolean>(true);
    const [timerRunning, setTimerRunning] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null; // Initialize interval as null
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
                        if (minutes === 0) {
                            setTimerRunning(false); // Automatically stop the timer at the end of each session
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
