const reducer = (state, action)=>
{
    if(action.type === 'backToNorm')
    {
        state = {
            loading: true,
            questionList: undefined,
            formData: {number: 5, difficulty: 'easy', category: 21},
            correctAns: 0,
            index: 0,
            hidePaper: true,
            hideResult: true
        }
        return{ ...state }
    }


    if(action.type === 'setFormData')
    {
        const{ name, value } = action.payload;
        if(name === "number")
        {
            state.formData.number = value;
        }
        if(name === "category")
        {
            state.formData.category = value;
        }
        if(name === "difficulty")
        {
            state.formData.difficulty = value;
        }

        return{ ...state }
    }
    
    if(action.type === 'setHidePaper')
    {
        return{ ...state, hidePaper: false }
    }
    
    if(action.type === 'setLoading')
    {
        return{ ...state, loading: action.payload }
    }

    if(action.type === 'setQuestionList')
    {
        return{...state, questionList:  action.payload }
    }

    if(action.type === 'setResult')
    {
        return{ ...state, hideResult: action.payload }
    }
    
    if(action.type === 'setIndex')
    {
        let tmp = (state.correctAns / state.questionList.length) * 100;
        if(state.index === state.questionList.length-1)
        {
            return{ ...state, hideResult: false, percentage: tmp.toFixed(2) }
        }

        return{...state, index: state.index+1}
    }

    if(action.type === 'setCorrectAns')
    {
        let tmp = (state.correctAns / state.questionList.length) * 100;
        if(state.index === state.questionList.length-1)
        {
            return{ ...state, hideResult: false, percentage: tmp.toFixed(2) }
        }
        return{ ...state, correctAns: state.correctAns+1, index: state.index+1, percentage: tmp.toFixed(2) }
    }

}

export default reducer;


