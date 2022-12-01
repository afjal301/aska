import Section from './section';
import Header from './header';
import Footer from './footer';
const Home =()=>{
    const handleclick =()=>{
        document.getElementById('video').style.display = 'inline';
    }
    return <>
    <Header/>
        <div className="home">
            <div className='trans'>
                <div>
                <b className='title'> Bienvenue chez  Aska Institut</b> <br />
                <button className='button' onClick={handleclick}><a href="#video">Plus de Details</a></button>
                </div>
            </div>
        </div>
        <Section/>
        <Footer/>
    
    </>
}
export default Home