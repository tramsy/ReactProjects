import Navbar from "../components/Navbar";

const About = ()=>{
    return(<>
        <Navbar />
        <section className='about'>
            <h2>About Us</h2>
            <p style={{color: '#121212', marginTop: '2em'  ,fontSize: '1.2rem', lineHeight: '35px', wordSpacing: '5px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?</p>
        </section>
    </>)
}

export default About;