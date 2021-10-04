
export const Category = ({func})=>{

    const foodCategory = ['All', 'breakfast', 'lunch', 'shakes']

    return(
        <div className='menu-list'>
            {
                foodCategory.map((item, index)=>{
                    const category = item;
                    return(
                        <li key = {index}><button className='btn' onClick={()=>{func(category)}}>{category}</button></li>
                    )
                })
            }
        </div>
    )
}