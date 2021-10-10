import { Link } from "react-router-dom";

const Card = ({props})=>{


    const{id, name, image, isAlcoholic, glass} = props;

    return(<>
        <div className='card' key = {id}>
            <div className='card-head'>
                <img src={image} alt={name} />
            </div>
            <div className='card-body'>
                <div>
                    <h1>{name}</h1>
                    <h4>{glass}</h4>
                    <p>{isAlcoholic}</p>
                </div>
               <Link to={`/singlecocktail/${id}`} className='btn btn-link'>Details</Link>
            </div>
        </div>
        
    </>)
}

export default Card;