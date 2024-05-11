import React, {createContext, ReactNode, useContext, useState} from 'react';

type PomodoroContextType = {
    pomodoroMinutes: number;
    setPomodoroMinutes: (minutes: number) => void;
    breakMinutes: number;
    setBreakMinutes: (minutes: number) => void;
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

export const usePomodoroSettings = (): PomodoroContextType => {
    const context = useContext(PomodoroContext);
    if (context === undefined) {
        throw new Error('usePomodoroSettings must be used within a PomodoroProvider');
    }
    return context;
};

export const PomodoroProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [pomodoroMinutes, setPomodoroMinutes] = useState<number>(25);
    const [breakMinutes, setBreakMinutes] = useState<number>(5);

    const value = {
        pomodoroMinutes,
        setPomodoroMinutes,
        breakMinutes,
        setBreakMinutes
    };

    return (
        <PomodoroContext.Provider value={value}>
            {children}
        </PomodoroContext.Provider>
    );
};
