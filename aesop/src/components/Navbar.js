const Navbar = ()=>
{
    return(
        <div className='nav'>
                    <ul className='page'>
                        <li><button style={{marginLeft: '2em'}} className='page-btn'>Shop</button></li>
                        <li><button className='page-btn'>Read</button></li>
                        <li><button className='page-btn'>Stores</button></li>
                        <li><button className='page-btn'>Search</button></li>
                    </ul>
                    <div className='login-cart'>
                        <li><button className='page-btn login-btn'>Login</button></li>
                        <li><button className='page-btn cart-btn'>Cart</button></li>
                        <li><button className='page-btn bars'><i class="fas fa-bars fa-lg"></i></button></li>
                    </div>
                </div>
    )
}


export default Navbar;