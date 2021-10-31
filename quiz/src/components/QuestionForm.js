import { useContext } from "react";
import { AppContext } from "../Context";

const QuestionForm = ()=>
{

    const{ formData, handleChange, handleSubmit } = useContext(AppContext);

    return(<section className="quiz-form">
        <form className="frm" onSubmit = {handleSubmit} >
            <h1>Setup Quiz</h1>
            <div>
                <label htmlFor='number'>Number of questions</label>
                <input 
                type = 'number' 
                id='number'  
                name='number'
                value={ formData.number }
                onChange = {(e)=>{ handleChange(e) }}
                />
            </div>
            <div>
                <label htmlFor='category'>Category</label>
                <select name='category' id='category' onChange = {(e)=>{ handleChange(e) }} >
                    <option value='21' name='category'>Sports</option>
                    <option value='23' name='category'>History</option>
                    <option value='24' name='category'>Politics</option>
                </select>
            </div>
            <div>
                <label htmlFor='dificulty'>Dificulty</label>
                <select name='difficulty' id='deficulty' onChange = {(e)=>{ handleChange(e) }} >
                    <option value='easy'>easy</option>
                    <option value='medium'>midium</option>
                    <option value='hard'>hard</option>
                </select>
            </div>
            <div>
                <button type='submit' className='btn'>Create</button>
            </div>
        </form>
    </section>)
}


export default QuestionForm;