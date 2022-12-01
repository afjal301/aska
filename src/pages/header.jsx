import react from 'react';
import logo from '../img/aska.png'
import menu from '../img/menu.png'
import { NavLink } from 'react-router-dom';
//import '../service/reduction'

const Header = ()=>{
    const handlereduit=(id)=>{
      // document.getElementById(id).style.height="40vh"
        
    }
    return <>
        <div className='header' id='header'>
           
                <div className='logo'>
                    <NavLink to='/'><img src={logo} alt="" /></NavLink>
                </div>
                <div className='navbar'>
                    <ul className='first'>
                        <li className='active'><button><NavLink to='/'>Accueil</NavLink></button></li>
                        <li><button className='none'><NavLink to='/formation'>Formation</NavLink></button></li>
                        <li><button className='none'><a href="#valeur">Valeur</a></button></li>
                        <li><button className='none'><a href="#admition">Admition</a></button></li>
                        
                    </ul>
                   <NavLink to='/formation'> <img src={menu} alt="" onClick={()=>handlereduit('header')}/></NavLink>
                </div>
                <div className='connected'>
                    <button><a href="#contact">contact</a></button>
                </div>
        </div>
    </>
}
export default Header