import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import CartItem from "./CartItem";


const Checkout = ({ shoppingItem, setShoppingItem})=>
{
    const[total, setTotal] = useState(0);

    const calculateTotal = ()=>
    {
        let arr = shoppingItem.map(item=>{
            const{amount, price} = item;
            return (amount * price);
        })
        setTotal(arr.reduce((initial, num)=>initial+num).toFixed(2)); 
    }

    useEffect(()=>
    {
        calculateTotal()
    }, [shoppingItem])
    

    return(
        <section className='checkout'>
            <div className='title'><h2>YOUR BAG</h2></div>
            <div className='details'>
                {
                    shoppingItem.map((item)=>
                    {
                        const{amount, id, img, price, title} = item;
                        return(
                            <CartItem
                            id = {id} 
                            amount = {amount} 
                            img = {img} 
                            price = {price} 
                            title = {title} 
                            key = {id}
                            shoppingItem = { shoppingItem } 
                            setShoppingItem = { setShoppingItem } />
                        )
                    })
                }
            </div>
            <hr />
            <div className='footer'>
                    <div className='bill'>
                        <h3 style={{marginLeft: '2em'}}>total</h3>
                        <h3>${ total }</h3>
                    </div>
                    <div className='clear-sec'>
                        <button className='clear-btn' onClick={()=>setShoppingItem([])}>Clear Cart</button>
                    </div>
                </div>
        </section>
    )
}


export default Checkout;