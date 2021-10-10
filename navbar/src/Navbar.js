import logo from './logo.svg'
import {links, social} from './data'
import { useEffect, useRef, useState } from 'react'


const Navbar = ()=>{

    const link = links;
    const linkRef = useRef(null);
    const[showLinks, setShowLinks] = useState(false);

    const toggleLinks = ()=>{
        setShowLinks(!showLinks)
    }

    useEffect(()=>{
        if(showLinks){
            linkRef.current.style.height = '200px'
        }else{
            linkRef.current.style.height = '0px'
        }
    }, [showLinks])

    return(
        <header>
            <nav>
                <div className='logo'>
                    <img src={logo} alt='#' width='200' />
                    <div className='bars' onClick={toggleLinks}>
                        <i class="fas fa-bars fa-lg"></i>
                    </div>
                </div>
                <div className='pages' ref={linkRef}>
                    <ul>
                    {
                        link.map((item)=>{
                            const{id, url, text} = item;
                            return(
                                <li key = {id}><a href={url}>{text}</a></li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className='social'>
                    <ul>
                        {
                            social.map((item)=>{
                                const{id, url, text} = item;
                                return(
                                    <div key = {id}><a href={url}>{text}</a></div>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;