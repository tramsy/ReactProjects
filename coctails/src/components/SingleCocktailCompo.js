import { Link } from "react-router-dom";

const SingleCocktailCompo = ({singleCoctail})=>
{
    console.log('mssg: ', singleCoctail)
    if(singleCoctail){
        return(
            <>
                <div style={{width: '90%', margin: '3em auto', display: "grid", justifyContent: 'center'}}>
                    <Link to='/' className='btn btn-link' style={{width: '150px'}} >Back Home</Link>
                </div>
                <section className='single-cocktail'>
                    <div>
                        <img src={singleCoctail.image} alt={singleCoctail.name} />
                    </div>
                <div className='info'>
                    <div>
                        <h5 className='title'>Name:</h5> <h5 className='detail'>{singleCoctail.name}</h5>
                    </div>
                    <div>
                        <h5 className='title'>Category: </h5> <h5 className='detail'>{singleCoctail.isAlcoholic}</h5>
                    </div>
                    <div>
                        <h5 className='title'>Glass: </h5> <h5 className='detail'>{singleCoctail.glass}</h5>
                    </div>
                    <div>
                        <h5 className='title'>Instruction: </h5> <h5 className='detail'>{singleCoctail.instructions}</h5>
                    </div>

                </div>
            </section>
        </>
    )
    }else{
        return(<section className='all-coctails'>
        <h2>Nothing to display...</h2>
    </section>)
    }

}

export default SingleCocktailCompo;