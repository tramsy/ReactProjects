import { useState } from "react";

const Card = ({data, removeTour})=>
{
    const[visibility, setVisibility] = useState(false);
    return(
        <>
            {data.map((tour)=>{
                const{id, name, info, image, price} = tour;

                return(
                    <div className='card' key={id}>
                        <div className='card-head'>
                            <img src={image} alt='#' />
                        </div>
                    <div className='card-body'>
                        <h2>{name}</h2>
                        <p>
                            {visibility ? info : info.substring(1,200)}... 
                            <button className='show-hide' onClick={()=>{setVisibility(!visibility)}}>{visibility ? 'show less' : 'show more'}</button> 
                        </p>
                        <h4>Price: {price}</h4>
                    </div>
                        <div className='card-footer'>
                            <button onClick={()=>{removeTour(id)}}>Not Intersted</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Card;