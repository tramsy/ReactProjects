import Card from "./Card"
import {data} from '../data';


const Products = ()=>
{
    const products = data;

    return(<>
        <main>
            <h1 className='title'>ALL<span style={{color: 'rgb(73, 166, 233)'}}> Products  </span> </h1>
            <section className='product-container'>   
                {
                    products.map(item=>
                    {
                        const{id, name, img, price} = item;
                        return(
                        <Card  key = {id} id={id} name = {name} img = {img} price = {price} />
                        )
                    })
                }
            </section>
        </main>
    </>)
}

export default Products