import { useState } from "react";
import Quiz from "./Quiz";
import SearchForm from "./SearchForm"

const Home = ()=>{

    const[data, setData] = useState({number: 5, category: 21, difficulty: 'easy'});
    const[url, setUrl] = useState('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
    const[state, setState] = useState(true);

    const handleChange = (e)=>{
        const{name, value} = e.target;
        setData((pre)=>{
            return({
                ...pre, 
                [name]: value
            })
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUrl(`https://opentdb.com/api.php?amount=${data.number}&category=${data.category}&difficulty=${data.difficulty}&type=multiple`);
        setState(!state);
    
    }
   

    if(state)
    {
        return(<article>
            <SearchForm data={data} handleChange = {handleChange} handleSubmit = {handleSubmit} />
        </article>)
    }else
    {
        return(
            <Quiz prop = {url} changeState = {setState} state = {state} />
        )
    }
    

}

export default Home;