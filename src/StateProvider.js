import React , { createContext , useContext , useReducer } from 'react';

// Preaping the data layer
export const StateContext = createContext();



export const StateProvider = ({ reducer , initalState , children 
}) => (

    <StateContext.Provider value ={useReducer(reducer , initalState)}>

         {children}    {/* Refering to the APP component in Index.js */}

    </StateContext.Provider>
) ;


// Hook which allows us to pull information from the data layer 

export const useStateValue = () => useContext(StateContext);