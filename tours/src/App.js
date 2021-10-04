import { useEffect, useState } from "react";
import Card from "./Card";

const App = ()=>
{
    const url = 'https://course-api.com/react-tours-project'
    const[loading, setLoading] = useState(true);
    const[data, setData] = useState([]);

    const fetchTours = async ()=>{
        setLoading(true);
        try{
            const response = await fetch(url);
            const tours = await response.json();
            setData(tours);
            setLoading(false);
            // console.log(tours);
        }catch(error){console.log(error) 
            setLoading(false);}

    }

    useEffect(()=>{
        fetchTours()
    }, []);



    if(loading){
        return(<div className='heading'><h1>Loading...</h1></div>)
    }
    if(data.length===0)
    {
        return(<div className='heading'><h1>We have nothing to show...</h1></div>)
    }

    const doFilter = (id)=>{
        let newData =  data.filter((ele)=>ele.id !== id);
        setData(newData)
    }


    return(
        <>
          
            <div className='heading'>
                <h1>Our Tours</h1>
            </div>

            <div className='container'>
                <Card data = {data} removeTour = {doFilter} />
            </div>
        </>
    )
}

export default App;