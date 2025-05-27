import React, { createContext, useContext, useReducer } from "react";

//  État initial
const initialState = {
    isConnected: false,
};

//  Reducer : Définit les actions possibles 
const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, isConnected: true };
         case "LOGOUT":
            return { isConnected: false };
        default:
            return state;
    }
};

//  Créer le contexte
const AuthContext = createContext();

//  Créer le Provider (fournit l'état global)
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

//  Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
    return useContext(AuthContext);
};
