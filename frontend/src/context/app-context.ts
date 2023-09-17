import { createContext } from "react";

export const AppContext: any = createContext({
    isLoading: false,
    language: 'en'
});