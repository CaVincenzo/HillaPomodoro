import React, {createContext, ReactNode, useContext, useState} from 'react';

type PomodoroContextType = {
    pomodoroMinutes: number;
    setPomodoroMinutes: (minutes: number) => void;
    breakMinutes: number;
    setBreakMinutes: (minutes: number) => void;
};

const PomodoroTimerContext = createContext<PomodoroContextType | undefined>(undefined);

export const usePomodoroSettings = (): PomodoroContextType => {
    const context = useContext(PomodoroTimerContext);
    if (context === undefined) {
        throw new Error('usePomodoroSettings must be used within a PomodoroProvider');
    }
    return context;
};

export const GlobalTimerProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [pomodoroMinutes, setPomodoroMinutes] = useState<number>(25);
    const [breakMinutes, setBreakMinutes] = useState<number>(5);

    const value = {
        pomodoroMinutes,
        setPomodoroMinutes,
        breakMinutes,
        setBreakMinutes
    };

    return (
        <PomodoroTimerContext.Provider value={value}>
            {children}
        </PomodoroTimerContext.Provider>
    );
};
