import { useContext, useEffect } from 'react';
import { IoBagCheckOutline } from 'react-icons/all';
import { AppContext } from '../Context';
import { getStorage } from '../LocalStorageManager';

const Bill = ()=>
{

    const{ cart, total, dispatch } = useContext(AppContext);
    const arr = getStorage();

    const createBill = ()=>
    {
        if(arr.length > 0)
        {
            let tmparr = arr.map(item=> item.amount * item.price)
            tmparr  = tmparr.reduce((pre, current)=> pre + current );
            dispatch({type: 'createBill', payload: tmparr})
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