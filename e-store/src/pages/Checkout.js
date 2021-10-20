import { useContext } from "react";
import Bill from "../components/Bill";
import Navbar from "../components/Navbar";
import ShoppingBag from "../components/ShoppingBag";
import { AppContext } from "../Context";


const Checkout = ()=>
{
    const{ cart } = useContext(AppContext);
    return(<>
    <Navbar />
    <article className='checkout'>
        <section className='list-container'>
            {
                cart.length === 0 && <div>
                <h1>Cart Is Empty</h1>
            </div>
            }
            {
                cart.map(item=>
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