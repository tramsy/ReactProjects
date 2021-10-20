import React, { useReducer, useState } from 'react';
import { reducer } from './reducer';

const AppContext = React.createContext();
const initial = {
    isNavOpen: false,
    cart: [],
    quantity: 0,
    total: 0,
    singleProduct: null,
    showToast: false
}



const AppProvider = ({ children })=>
{

    const[state, dispatch] = useReducer(reducer, initial);

    return(
    <AppContext.Provider value={{
        ...state,
        dispatch,
    }}>
        { children }
    </AppContext.Provider>)
}


export {AppContext, AppProvider};












