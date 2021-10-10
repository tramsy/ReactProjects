import logo from './images/logo.svg';
import links from './data';
import {useEffect, useRef, useState } from 'react';
import Submenu from './Submenu';

const Navbar = ()=>
{

    const[visibility, setVisibility] = useState(false);
    const[subMenuDetails, setSubMenuDetails] = useState([{page: '', center: '', bottom: ''}]);
    const[isOpen, setIsOpen] = useState(false);
    const reference = useRef(null);



    const changeVisisbility = ()=>{
        setVisibility(!visibility)
    }

    const showSubMenu = (value)=>{
        let page = value.target.textContent;
        let tempBtn = value.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right - 250)/2;
        const bottom = tempBtn.bottom - 30;
        setSubMenuDetails([{page, center, bottom}]);
        setIsOpen(true);
    }

    useEffect(()=>{
        <Submenu details = {subMenuDetails} status = {isOpen} manageStatus = {showSubMenu} />
    }, [isOpen])

    return(
        <>
            <nav>
                <div className='container'>
                    <img src={logo} alt="#" />
                    <ul>
                        <li ref={reference} onMouseEnter = {showSubMenu} onMouseLeave={()=>setIsOpen(false)}>Porducts</li>
                        <li onMouseEnter = {showSubMenu} onMouseLeave={()=>setIsOpen(false)}>Developers</li>
                        <li  onMouseEnter = {showSubMenu} onMouseLeave={()=>setIsOpen(false)}>Company</li>
                    </ul>
                </div>
            </nav>

            <Submenu details = {subMenuDetails} status = {isOpen} />

            
            <div className='bars' onClick={changeVisisbility}>
                <i class="fas fa-bars fa-sm" style={{color: '#fff'}}></i>
            </div>  
            <section className={visibility ? 'mobile-pages show' : 'mobile-pages'}>
                    <button className='btn' onClick={changeVisisbility}><i class="fas fa-times fa-2x"></i></button>
                    <div className='parent'>
                    {
                        links.map((item, index)=>{
                            const{page, links} = item;
                            return(<div key={index}> 
                                <h5>{page}</h5>
                            <div className='sub-menu'> 
                            {
                                links.map((item, index)=>{
                                    const {label, icon, url} = item;
                                    return(
                                        <div key={index}>
                                            {icon}
                                            <label><a href={url}>{label}</a></label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>)
                    })
                }
                </div>
                </section>
            
        </>
    )

}

export default Navbar;

