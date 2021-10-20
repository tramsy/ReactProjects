import { useContext, useEffect } from "react";
import Bill from "../components/Bill";
import Navbar from "../components/Navbar";
import ShoppingBag from "../components/ShoppingBag";
import { AppContext } from "../Context";
import { getStorage } from "../LocalStorageManager";

const Checkout = ()=>
{
    const{ cart } = useContext(AppContext);
    const arr = getStorage();

    useEffect(()=>
    {
        getStorage();
    }, [])

    return(<>
    <Navbar />
    <article className='checkout'>
        <section className='list-container'>
            {
                arr.length === 0 && <div>
                <h1>Cart Is Empty</h1>
            </div>
            }
            {
                arr.map(item=>
                {
                    return(<ShoppingBag {...item} key={item.id} />)

                })
            }
        </section>
        <Bill />
    </article>
    </>);
}


export default Checkout;