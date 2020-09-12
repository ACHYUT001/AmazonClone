import React, { createContext, useContext, useReducer, Props } from "react";

export const StateContext = createContext<any>([]);

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
