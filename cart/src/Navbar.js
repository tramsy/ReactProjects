import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Navbar = ({ shoppingItem })=>
{
    let[quantity, setQuantity] = useState(0);
    const totalQuatity = ()=>
    {
       if(shoppingItem.length > 0){
        let arr = shoppingItem.map(item=>item.amount);
        setQuantity(arr.reduce((initial, num)=>initial + num))
       }else{
           setQuantity(0)
       }
    }

    useEffect(()=>
    {
        totalQuatity()
    }, [shoppingItem]);


    return(<>
        <nav className='navbar'>
            <h1 className='logo'>UseReducer</h1>
            <div>
                <i className="fas fa-shopping-cart fa-2x" style={{color: '#fff'}}></i>
                <span style={{fontSize: '1.1rem', color: '#fff'}}>({quantity})</span>
            </div>
        </nav>
    </>)
}

export default Navbar;