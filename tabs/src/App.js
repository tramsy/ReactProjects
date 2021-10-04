import { useEffect, useState } from "react";



const url = 'https://course-api.com/react-tabs-project'

function App(){

    const[loading, setLoading] = useState(true);
    const[jobs, setJobs] = useState([]);
    const[index, setIndex] = useState();

    const doFetch = async()=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setJobs(data);
        }catch(error){
            console.log(error)
        }
    }

    const doFilter = (value = 'recAGJfiU4CeaV0HL')=>{
        setIndex(value)
        let newJobs = jobs.filter((item)=>item.id === value)
        console.log(newJobs)
    }


    useEffect(()=>{
        doFetch()
    }, []);

    useEffect(()=>{
        doFilter('recAGJfiU4CeaV0HL')
    }, [])

    if(loading){
        return(<main><h1>Loading...</h1></main>)
    }
    
    return(
       <main>
           <h1>Experience</h1>
           <article>
               <div className='companies'>
                    {
                        jobs.map((item)=>{
                            const{id, company} = item;
                            return(<div key={id}>
                                    <button className={index===id ? 'btn active' : 'btn'} onClick={()=>doFilter(id)}>{company}</button>
                                </div>)
                        })
                    }
               </div>
               <div className='job-details'>
                 {
                    jobs.map((item)=>{
                        const{id, title, company, dates, duties} = item;
                        console.log(id);
                        console.log('index: ', index);
                        if(id === index){
                            return(
                                <div key = {id}>
                                    <h2>{title}</h2>
                                    <h4>{company}</h4>
                                    <p>{dates}</p>
                                    {
                                        duties.map((item, index)=>{
                                            return(
                                                <div key={index} className='task'>
                                                    <li>{item}</li>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    })
                 }
               </div>
           </article>
       </main>
    )
}


export default App;












// {
//     jobs.map((item)=>{
//         const{id, title, company, dates, duties} = item;
//         return(<div key = {id}>
//             <h2>{title}</h2>
//             <h4>{company}</h4>
//             <p>{dates}</p>
//             {
//                 duties.map((item, index)=>{
//                     return(
//                         <div key = {index}>
//                             <li>{item}</li>
//                         </div>
//                     )
//                 })
//             }
//         </div>

//         )
//     })
// }