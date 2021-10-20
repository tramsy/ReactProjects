import { useContext } from 'react';
import {BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/all';
import { AppContext } from '../Context';

const ShoppingBag = ({id, name, img, amount, price})=>
{
    const{ dispatch } = useContext(AppContext);

    return(
            <div>
                <div>
                    <img src={img} alt='#' />
                </div>
                <div style={{display: 'grid', alignItems: 'center'}}>
                    <h2>{ name }</h2>
                    <h3 style={{fontSize: '1rem', fontWeight: '400'}}>&#8377; { price } </h3>
                    <button 
                    className='remove-btn' 
                    onClick={()=>{dispatch({type: 'remove', payload: id})}}
                    >
                        remove
                    </button>
                </div>
                <div className='cart-btn-container'>
                    <button
                    onClick={()=>{dispatch({type: 'addToCart', item: {id: id, name: name, img: img, amount: amount, price: price} })}}
                    > 
                    <BiUpArrowAlt size={25} className='global-color' /> 
                    </button>
                    
                    <h4 style={{color: '#555'}}>{ amount }</h4>
                    <button
                    onClick={()=>{dispatch({type: 'decreseQuantity', item: {id: id, name: name, img: img, amount: amount, price: price} })}}
                    ><BiDownArrowAlt size={25} className='global-color' /> </button>
                </div>
            </div>
    )
}

export default ShoppingBag;