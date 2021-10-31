import { useReducer } from "react";
import reducer from "./reducer";
import React from "react";

const AppContext = React.createContext();
const initial = {
    loading: true,
    questionList: undefined,
    formData: {number: 5, difficulty: 'easy', category: 21},
    correctAns: 0,
    index: 0,
    hidePaper: true,
    hideResult: true,
    percentage: 0
}


const AppProvider = ({ children })=>
{
    const[state, dispatch] = useReducer(reducer, initial);


    const handleChange = (e)=>{
        dispatch({type:'setFormData', payload: e.target})
    }

    const setLoading = (value)=>
    {
        dispatch({type: 'setLoading', payload: value})
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault();
        dispatch({type: 'setHidePaper'})
    }

    const setQuestionList = (question_arr)=>
    {
        dispatch({type: 'setQuestionList', payload: question_arr})
    }

    const setResult = (value)=>
    {
        dispatch({type: 'setResult', payload: value})
    }

    const changeIndex = ()=>
    {
        dispatch({type: 'setIndex'})
    }

    const updateCorrectAns = ()=>
    {
        dispatch({type: 'setCorrectAns'})
    }

    const backToNorm = ()=>{
        dispatch({type: 'backToNorm'})
    }

    return(<AppContext.Provider value={
        {
            ...state,
            handleChange,
            handleSubmit,
            setLoading,
            setQuestionList,
            setResult,
            changeIndex,
            updateCorrectAns,
            backToNorm
        }}>
            { children }

    </AppContext.Provider>)
}


export {AppContext, AppProvider};