import { useContext, useEffect } from "react";
import { AppContext } from "../Context";

const QuestionPaper = ()=>
{

    const{loading, correctAns, formData, setLoading, questionList, setQuestionList, index, changeIndex, updateCorrectAns  } = useContext(AppContext);
    const url = `https://opentdb.com/api.php?amount=${formData.number}&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`;


    useEffect(()=>
    {
        setLoading(true)
        const fetchQuestions = async()=>
        {
            try{
                const response = await fetch(url);
                const question_arr = await response.json();
                setQuestionList(question_arr.results)
                setLoading(false)
            }catch(error){
                console.log('got this error while fetching...' + error)
            }
        }


        fetchQuestions()
    }, [])
    if(loading)
    {
        return(<section style={{margin: '5em auto', textAlign: 'center'}}>
            <h1>Loading...</h1>
        </section>)
    }


    return(<>
        <section className={loading ? "quesitons-sec" : "questions-sec show"}>
                <div className="score-board">
                    <h4 className='user-score'>Correct Answer : {correctAns} / {questionList.length}</h4>
                </div>
                <div className="question">
                    <h1>{ questionList[index].question }</h1>
                </div>
                <div className="ans-btn-container">
                    <button className="ans-btn" onClick={ updateCorrectAns } > { questionList[index].correct_answer } </button>
                    <button className="ans-btn" onClick={ changeIndex }> { questionList[index].incorrect_answers[0] } </button>
                    <button className="ans-btn" onClick={ changeIndex }> { questionList[index].incorrect_answers[1] } </button>
                    <button className="ans-btn" onClick={ changeIndex }> { questionList[index].incorrect_answers[2] } </button>
                </div>
                <div className="next-question">
                    <button className="next-btn" onClick={ changeIndex } > Next Question </button>
                </div>
        </section>        
        </>
    )
}


export default QuestionPaper;