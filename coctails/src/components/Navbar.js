import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = ()=>{
    return(
        <nav>
            <div className='container'>
                <img src={ logo } alt='#' width='200'/>
                <ul>
                    <li><Link to='/' className='link' >Home</Link></li>
                    <li><Link to='/about' className='link' >About</Link> </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;