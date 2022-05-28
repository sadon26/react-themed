import React from "react";
import ActionContextProvider from "./actionContext";
import { ContextProps } from "./context-interface";

const ContextProvider = ({ children }: ContextProps) => (
    <ActionContextProvider>{children}</ActionContextProvider>
);

export default ContextProvider;
