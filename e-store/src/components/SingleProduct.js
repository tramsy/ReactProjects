import { useContext, useEffect } from "react";
import { AppContext } from "../Context";
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SingleProduct = ()=>
{

    const{ singleProduct, dispatch } = useContext(AppContext);

    if(singleProduct !== null)
    {
        const{ id, name, img, price, desc } = singleProduct;
        <ToastContainer autoClose={1000} />
        return(<>
            <article className='single-item'>
                <div className='img-container'>
                    <img src={img} alt={name} />
                </div>
                <div className='item-details'>
                    <div>
                        <h2>{ name }</h2>
                        <p> &#8377; { price }</p>
                    </div>
                    <div className='desc'>
                        {
                            desc.map((item, index)=>
                            {
                                return(<ul key = {index}>
                                    <RiArrowRightSLine className='global-color' size={20} />  <li> {item} </li>
                                </ul>)
                            })
                        }
                    </div>
                    <div className='btn-div'>
                        <button 
                        className='final-btn'
                        onClick={()=>{ dispatch({type: 'addToCart', item: {id: id, name: name, img: img, price: price, amount: 1}}) }}
                        
                        >Add</button>
                        <Link to='/' className='back'> <button className='final-btn'>Back</button></Link>
                    </div>
                </div>
    
            </article>
        </>)
    }
    else{
        return(
            <div>
                <h2>Product is not available</h2>
            </div>
        )
    }

}



export default SingleProduct;