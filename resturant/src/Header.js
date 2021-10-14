import { menu } from "./data"

const Header =({ categoriesButtons, setData })=>
{

    const doFilter = (cat)=>
    {
        if(cat==='all'){
            setData(menu);
        }        
        else{
            const filterDishes =  menu.filter(item=>item.category === cat);
            setData(filterDishes)
        }
    }
    return(
        <div className='menu-list'>
            {
                categoriesButtons.map((item, index)=>
                {
                    return(
                        <li key={index}>
                            <button className='btn' onClick={()=>{doFilter(item)}} >{item}</button>
                        </li>
                    )
                })
            }
        </div>
    )
}


export default Header