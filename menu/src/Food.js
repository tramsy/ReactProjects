const Food = ({data})=>{

    return (
    <article className='food'>
        {
            data.map((item)=>{
                const{id, title, price, img, desc} = item;
                return(
                    <div key={id}>
                        <img src={img} alt="#" />
                        <div>
                            <div>
                                <h4 id='title'>{title}</h4>
                                <label > $ {price}</label>
                            </div>
                            <hr />
                            <p>{desc}</p>
                        </div>
                    </div>
                )
            })
        }
    </article>)
}


export default Food;