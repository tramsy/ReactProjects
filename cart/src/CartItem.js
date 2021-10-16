const CartItem = ({id, amount, img, price, title, shoppingItem, setShoppingItem})=>
{   
    const increaseItem = (uniqueId)=>
    {
        let index = shoppingItem.findIndex(obj=>obj.id === uniqueId);
        shoppingItem[index].amount = amount + 1;
        let tmp = shoppingItem;
        setShoppingItem([...tmp]);        
    }

    const decreaseItem = (uniqueId)=>
    {
        let index = shoppingItem.findIndex(obj=>obj.id === uniqueId);
        shoppingItem[index].amount = amount - 1;
        if(shoppingItem[index].amount===0)
        {
            doFilter(uniqueId);
        }else{
            setShoppingItem([...shoppingItem])
        }
    }

    const doFilter = (id)=>
    {
        let tmp = shoppingItem.filter(item=>item.id!==id);
        setShoppingItem(tmp)
    }

    return(
        <div className='single-item'>
            <div className='img-name'>
                <img src={img} alt='#' className='img' style={{width: '30%', height: '100%'}} />
                <div className='single-detail'>
                    <h5 className='product-name'>{title}</h5>
                    <h5 className='price'>${price}</h5>
                    <button className='remove-btn' onClick={()=>{doFilter(id)}}>remove</button>
                </div>
            </div>
            <div className='inc-dec-btn'>
                <button className='inc-btn' onClick={()=>{increaseItem(id)}}><i className="fas fa-arrow-up fa-lg"></i></button>
                <h5 className='quantity'>{ amount }</h5>
                <button className='dec-btn' onClick={()=>{decreaseItem(id)}}><i className="fas fa-arrow-down"></i></button>
            </div>
        </div>
    )
}

export default CartItem;