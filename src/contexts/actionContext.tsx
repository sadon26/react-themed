import { createContext, useContext, useState } from "react";
import { ContextProps } from "./context-interface";

const Context = createContext<any>([]);

const ActionContextProvider = ({ children }: ContextProps) => {
    const [actions, setActions] = useState<any[]>([]);

    const setTimeForAction = (action: string) => {
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        setActions([...actions, `${date} ${time} ${action}`]);
    };

    return (
        <Context.Provider value={{ actions, setActions: setTimeForAction }}>
            <div>{children}</div>
        </Context.Provider>
    );
};

export const useActionsContext = () => useContext(Context);
export default ActionContextProvider;
