
const SideComponent = ({ sideComponent, setSideComponent })=>
{
    return(
        <div className={sideComponent ? 'side-component show-side-component' : 'side-component'}>
                    <div className='cros'>
                        <button style={{background: 'transparent', border: 'none', cursor: 'pointer'}} onClick={()=>{setSideComponent(false)}}><i className="fas fa-times fa-sm fa-lg"></i></button>
                    </div>
                    <div className='side-content'>
                        <h2 style={{fontWeight: '550'}}>Shipping fees and delivery times</h2>
                        <hr />
                        <h3 style={{marginTop: '14px'}}>Crown Logistics (Hong Kong)</h3>
                        <div>
                            <div className='parent'  style={{marginTop: '14px'}}>
                                <h4>Orders $400 and over</h4>
                                <h4>Complimentary</h4>
                            </div>
                            <div className='parent'>
                                <h4>Orders below $400</h4>
                                <h4>$40</h4>
                            </div>
                            <div className='parent' style={{marginTop: '16px'}}>
                                <h4>All orders</h4>
                                <h4>2-3 business days</h4>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h3> Carbon neutral shipping  </h3>
                            <p>We offset operational emissions to ensure the delivery of every order is carbon neutral.</p>
                        </div>
                        <hr />
                    </div>

                </div>
    )   
}
export default SideComponent;