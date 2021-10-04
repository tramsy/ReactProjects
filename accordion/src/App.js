import questions from './data';
import Question from "./Question";



function App(){

    const questionsList = questions;

    return(
        <main className='container'>
            <div className='static'>
                <h1>Question And Answer about login</h1>
            </div>
            <div className='dynamic' >
                {
                    questionsList.map((question)=>{
                        return(
                            <Question {...question} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default App;