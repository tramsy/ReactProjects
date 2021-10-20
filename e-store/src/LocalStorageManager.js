export const  addItemToStorage  = (product)=>
{                                                                                
    let arr = getStorage();
    arr.push(product)
    localStorage.setItem('list', JSON.stringify( arr ));
}

export const updateItemStorage = ()=>
{
    let arr = getStorage();
    arr.map((item)=>
    {
        item.amount = item.amount + 1;
    })
    localStorage.setItem('list', JSON.stringify( arr ));
}

export const decreseItemStorage = (product)=>
{
    let arr = getStorage();
    arr.map((item)=>
    {
        if(item.id === product.id)
        {
            item = product;
        }
    })
    localStorage.setItem('list', JSON.stringify(arr));

}


export const getStorage = ()=>
{
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

