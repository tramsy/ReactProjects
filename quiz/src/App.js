import { useContext } from "react";
import QuestionPaper from "./components/QuestionPaper";
import QuestionForm from "./components/QuestionForm";
import { AppContext } from "./Context";

function App()
{
    const{ hidePaper, hideResult, backToNorm, percentage } = useContext(AppContext);

    if(!hideResult)
    {
        return(
            <section className='result'>
            <div>
                <h2>Congrats</h2>
                <p className="para">You answered  {percentage}% question correctly</p>
                <div>
                    <button className="next-btn" onClick = { backToNorm } >Play again</button>
                </div>
            </div>
        </section>
        )
    }

    return(<main>
        {
            !hidePaper && <QuestionPaper />
        }
        {
            hidePaper && <QuestionForm />
        }
    </main>)
}


export default App;