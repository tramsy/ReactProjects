const Components = ({ people })=>
{
    return(
       <>
       {people.map((person)=>{
           const {id, name, age, img} = person;
           return(
                <div className="sec" key={id}>
                    <div id='imgs'>
                        <img src={img} alt="#" className='imgs'/>
                    </div>
                    <div className="common">
                        <h3>{name}</h3>
                        <h4>{age}</h4>
                    </div>
                </div>
           )
       })}
        
       </>
        
    )
}

export default Components;