import { useState } from "react"
import data from './data'


export const Employe = ()=>
{

    const[reviews, setReviews] = useState(data);
    const[index, setIndex] = useState(0);

    const validate = (value)=>{
        if(value < 0){
            return reviews.length-1;
        }
        if(value == reviews.length){
            return 0;
        }
        return value;
    }

    const backward = ()=>{
        let value = validate(index - 1);
        setIndex(value);
    }
    const forward = ()=>{
        let value = validate(index + 1);
        setIndex(value);
    }
    const randomPerson = ()=>{
        let value = validate(Math.floor(Math.random() * reviews.length));
        setIndex(value);
    }

    return(
        <article className='container'>
            <div className='img-div'>
                <img src={reviews[index].image} alt='#' />
            </div>
            <div className='title'>
                <h3 id='name'>{ reviews[index].name }</h3>
                <label for='name'>{ reviews[index].job }</label>
            </div>
            <div className='info'>
                <p>
                    { reviews[index].text }
                </p>
            </div>
            <div className='btn-div'>
                <button onClick={backward} className='btn'>back</button>
                <button onClick={forward} className='btn'>forward</button>
            </div>
            <div className='btn-div'>
                <button className='btn' onClick={randomPerson}>surprice me</button>
            </div>
        </article>
    )
}