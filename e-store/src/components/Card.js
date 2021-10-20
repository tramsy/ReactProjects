import { useContext } from 'react';
import {AiOutlineShoppingCart, AiFillEye} from 'react-icons/all'
import { Link } from 'react-router-dom';
import { AppContext } from '../Context';


const Card = ({ id, name, img, price })=>
{
    const{dispatch} = useContext(AppContext);
    return(<>
    <div className='card'>
        <div className='card-head'>
            <img src= {img} alt={name} />
        </div>
        <div className='card-body'>
            <h3>{ name }</h3>
            <h4>&#8377; { price } </h4>
        </div>
        <div className='card-footer'>
            
            <button 
            className='btn' 
            style={{color: '#fff', border: '2px solid #024b80'}}
            onClick={()=>{ dispatch({type: 'addToCart', item: {id: id, name: name, img: img, price: price, amount: 1 } }) }}
            >
                <AiOutlineShoppingCart size={25} />
            </button>
            
            <button className='btn' 
            style={{borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px'}}
            >
                <Link to={`view/${id}`} className='link' style={{color: '#fff'}} >  <AiFillEye size={25} /> </Link>
            </button>
        </div>
    </div>
    </>)
}

export default Card;