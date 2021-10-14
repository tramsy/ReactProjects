import { useEffect, useState } from "react";

const Quiz = ({prop})=>{
    const[loading, setLoading] = useState(false);
    const[question, setQuestion] = useState([]);
    const[index, setIndex] = useState(0);
    const[score, setScore] = useState(0);
    const[state, setState] = useState(false);


    const fetchQuestions = async()=>
    {
        setLoading(true)
        try{
            const responce = await fetch(prop);
            const questions = await responce.json();
            const { results } = questions;
            const filterQuestion = results.map((item)=>{
                const{question, incorrect_answers, correct_answer} = item;
                return {question, incorrect_answers, correct_answer}
            })
            setQuestion(filterQuestion);
            setLoading(false);

        }catch(error){
            console.log('Got this error while fetching: ' + error)
        }
    }

    useEffect(()=>{
        fetchQuestions();
    }, [])



    const manipulateIndex = ()=>{
        if(index < question.length)
        {
            setIndex(index+1)
        }else if(index === question.length){
            console.log('else part running: ')
            setState(true);
            window.location = '/';
            return
        }
    }

    const checkAnswer = (ans)=>
    {
        manipulateIndex();
        const { correct_answer } = question[index];
        if(ans === correct_answer)
        {
            setScore(score+1)
        }else{
            console.log(correct_answer, '  : ', ans);
        }
    }
    
   
    if(question.length > 0 && state === false)
    {
        return(<section>
            <div>
                <h2>{question[index].question}</h2>
            </div>
            <div>
                <button className='op-btn' onClick={()=>checkAnswer(question[index].correct_answer)} >{question[index].correct_answer}</button>
                {
                    question[index].incorrect_answers.map((item, index)=>{
                        return(<button className='op-btn' onClick={()=>checkAnswer(item)} key={index} >{ item }</button>)
                    })
                }
            </div>
        </section>)
    }else{
        return(<article>
            <h2>Loading...</h2>
        </article>)
    }
    
}


export default Quiz;