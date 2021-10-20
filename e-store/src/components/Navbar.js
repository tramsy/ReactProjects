import { useContext, useEffect } from 'react';
import { AiOutlineShoppingCart, FaBars } from 'react-icons/all';
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { AppContext } from '../Context';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ()=>
{
    const{ isNavOpen, dispatch, cart, quantity, showToast } = useContext(AppContext);
    const getTotal=()=>
    {
        dispatch({type: 'itemTotal'})
    }
    const notify = ()=>{ 
        toast('Item added', 
        {
            position: 'top-right',
            theme: "dark"
        })
         
    }

    const backToNormal = ()=>{ dispatch({type: 'normal'}) }

    useEffect(()=>
    {
        getTotal()
        if(showToast){notify()}
        backToNormal()
    }, [cart])

    return(<>
        <nav className={isNavOpen ? 'nav-bar show-nav' : 'nav-bar'}>
            <div className='logo'>
                <h2><span style={{color: 'rgb(73, 166, 233)'}}>Electrobuz</span>.store</h2>
                <div className='bars' onClick={()=>{
                    dispatch({type: 'toggleNav'})}}>
                    <FaBars size = {20} />
                </div>
            </div>
            <div className='pages'>
                <ul>
                    <li><Link to='/' className='link'> Home </Link></li>
                    <li><Link to='/about' className='link'> About </Link></li>  
                </ul>
            </div>
            <div className='cart'>
               <ul>
                    <div><Link to='/checkout' className='link'> <AiOutlineShoppingCart size = {32} /></Link> </div>
                    <div className='cart-amount'>({quantity})</div>
               </ul>
            </div>
        </nav>
        <ToastContainer autoClose={1000} />
    </>)
}

export default Navbar;