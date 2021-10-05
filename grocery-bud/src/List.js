
const List = ({data, doFilter})=>
{

    return(
        <div className='todo'>
            {
                data.map((item)=>{
                    const{id, name} = item;
                    return(
                        <div key = {id}>
                            <h4>{name}</h4>
                            <div>
                                <button className='func-btn'>Edit</button>
                                <button className='func-btn' onClick={()=>doFilter(id)}>Del</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;

// <div className='todo'>
//                 {
//                     list.map((item, index)=>{
//                         return(
//                             <div key = {index}>
//                                 <h4>{item}</h4>
//                                 <div>
//                                     <button className='func-btn' onClick={()=>{doUpdate(item, index)}}>Edit</button>
//                                     <button className='func-btn' onClick={()=>{doFilter(item)}}>Del</button>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>