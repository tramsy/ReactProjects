import { useState } from "react";

const Question = ({id, title, info})=>{


    const[visibility, setVisibility] = useState(false);
    
    return(
        <div key={id}>
            <div className='sec'>
                <h2>{title}</h2>
                <button className='btn' onClick={()=>{setVisibility(!visibility)}}>{visibility ? '-' : '+' }</button>
            </div>
           { visibility ?  <p>{info}</p> : ''}
        </div>


        // <>
        //     {
        //         data.map((question)=>{
        //             const{id, title, info} = question;
        //             return(
        //                 <div key={id}>
        //                     <div className='sec'>
        //                         <h2>{title}</h2>
        //                         <button className='btn' onClick={()=>{setVisibility(!visibility)}}>+</button>
        //                     </div>
        //                     <p>{ visibility ? info: ''}</p>
        //                 </div>
        //             )
        //         })
        //     }
        // </>
    )
}
export default Question;