const Submenu = ({details, status, manageStatus})=>{

    const {center, bottom} = details[0];
    console.log(status);
    console.log(typeof manageStatus)

    return(
      status &&  <div className='pc-pages' style={{left: center, bottom: bottom}} >

      </div>
    )
}


export default Submenu;