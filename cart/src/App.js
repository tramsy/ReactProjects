import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import Navbar from "./Navbar";

const url = 'https://course-api.com/react-useReducer-cart-project';
function App(){

    const[loading, setLoading] = useState(true);
    const[shoppingItem, setShoppingItem] = useState([]);


    const fetchCart = async()=>
    {
        setLoading(true);
        try
        {
            const responce = await fetch(url);
            const cartData = await responce.json();

            setShoppingItem(cartData);
            setLoading(false)

        }catch(error){
            console.log('got this error while fetching: ', error)
        }
    }


    useEffect(()=>
    {
        fetchCart();
    }, [])

    if(loading){
        return(<section style={{width: '90%', margin: '2em auto', textAlign: 'center'}}>
            <h1>Loading...</h1>
        </section>)
    }   

   if(shoppingItem.length===0)
   {
       return(<>
       <Navbar shoppingItem = { shoppingItem } />
        <section style={{width: '90%', margin: '2em auto', textAlign: 'center'}}>
            <h1>Cart is Empty</h1>
        </section>
       </>)
   }

    return(<>
        <Navbar shoppingItem = { shoppingItem } />
        <Checkout shoppingItem = {shoppingItem} setShoppingItem = {setShoppingItem} />
    </>)
}


export default App;