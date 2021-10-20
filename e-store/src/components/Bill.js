import { useContext, useEffect } from 'react';
import { IoBagCheckOutline } from 'react-icons/all';
import { AppContext } from '../Context';

const Bill = ()=>
{

    const{ cart, total, dispatch } = useContext(AppContext);

    const createBill = ()=>
    {
        if(cart.length > 0)
        {
            console.log('getcalled')
            let arr = cart.map(item=> item.amount * item.price)
            arr  = arr.reduce((pre, current)=> pre + current );
            dispatch({type: 'createBill', payload: arr})
        }
        else{
            dispatch({type: 'createBill', payload: 0})
        }
    }

    useEffect(()=>
    {
        createBill()
    }, [cart, total])

    return(
        <section className='bill-container'>
            <div>
                <h2>Sub-Total:</h2>
                <h3> &#8377; { total }</h3>
            </div>
            <div>
                <h2>Total:</h2>
                <h3> &#8377; { total }</h3>
            </div>
            <div>
                <button className='checkout-btn'> <IoBagCheckOutline size={25} />Checkout </button>
            </div>
        </section>
    )
}

export default Bill;