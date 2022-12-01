import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import book from '../img/book.png';
import boom from '../img/boom.jpeg';
import certificat from '../img/certificat.png';
import compte from '../img/compte.png';
import condition from '../img/condition.png';
import exercise from '../img/exercise.png';
import price from '../img/price.png';
import quiz from '../img/quiz.png';
import sortie from '../img/sortie.jpeg';
import skill from '../img/target.png';
import time from '../img/time.png';
import film from '../img/video.png';
import work from '../img/work.jpeg';
import Expli from './video';

//import emailjs from '@emailjs/browser';


const Section  = ()=>{
    //const form = useRef()
    const Form =useRef();
    const handleSubmit =(e)=>{
        e.preventDefault()
        emailjs.sendForm('Aska', 'template_5migt7i', Form.current, 'yC8dFACDRhb3F3qI9')
        .then((result) => {
            toast.info("Nous avons bien réçu votre email")
        }, (error) => {
            toast.warning("voyez verifiez bien le champ  ")
        })
      e.target.reset();
    }

    return <>
        <a name="accueil"></a>
        <div className="section">
            <b className='title'> Gallery de Aska</b> <br />
            <div className="gallery center">
                <div className="shadow">
                    <img className="img" src={sortie} alt="" /><br/>
                    Elu meilleur boursier cortier <br /> en 2018 <br />
                    <button>Prix</button>
                </div>
                <div className="shadow">
                    <img className="img"src={boom} alt="" /><br/>
                    Voyage d'etude à la place financier New York Stock Exchange <br />
                    <button>Exploit</button>
                </div>
                <div className="shadow">
                <img className="img"src={work} alt="" /><br/>
                    Pratique sur la logiciel Bloomberg  <br />
                    en 2017 <br />
                    <button>Pratique</button>
                </div>
            </div>
            <Expli/>
            <div className="value center">
                <div className="dir shadow">


                </div>
                <div className="desc">
                   
                    <b className='title2'> Ma mission est de vous aider à <br /> devenir un trader indépendant et rentable</b> <br />
                    
                    <p>
                        je croie en la synergie,si plus d'un cerveau travaille sur quelque chose,ils deviennent incroyablemment puissants pour atteindre n'importe quel objectif et c'est exactement ce qui fera votre succès... 
                    </p>
                    <p>Chez Aska Institut, le president Directeur Général est pret à vous transmettre les meilleurs stratégies connues au cours de ses 5 dernières années pour gragner sur les marchés financiers. Il est arrivée à la conclusion qu'aucun système n'est  assez puissant pour vous faire un profit constant en tant que trader. D'ou, la création de son propre système unique qui est une combinaison de l'analyse technique et de l'analyse fondamentale car  ses deux aspects sont inséparables.
                    </p>
                </div>
            </div>
            <a name="formation"></a>
            
            <b className='title'> Formation Chez Aska</b> <br />
            
            <div className="gallery center">
                <div className="trade">
                <b className='title'> Level I</b> <br />
                    <ul>
                        <li><img className="icon" src={skill} alt="" /><span className="description">Débutant</span></li>
                        <li><img className="icon" src={time} alt="" /><span className="description">40 heures </span></li>
                        <li><img className="icon" src={price} alt="" /><span className="description">150 000 Ar </span></li>
                    </ul>
                    <NavLink to='/formation'><button>Details</button></NavLink>
                </div>
                <div className="trade">
                <b className='title'> Level II</b> <br />
                    <ul>
                        <li><img className="icon" src={skill} alt="" /><span className="description">Intermediaire <br />   </span></li>
                        <li><img className="icon" src={time} alt="" /><span className="description">40 heures</span></li>
                        <li><img className="icon" src={price} alt="" /><span className="description">200 000 Ar</span></li>
                    </ul>
                    <NavLink to='/formation'><button>Details</button></NavLink>
                </div>
                <div className="trade">
                <b className='title'> Level III</b> <br />
                    <ul>
                        <li><img className="icon" src={skill} alt="" /><span className="description">Avancé</span></li>
                        <li><img className="icon" src={time} alt="" /><span className="description">40 heures</span></li>
                        <li><img className="icon" src={price} alt="" /><span className="description">250 000 Ar</span></li>
                    </ul>
                    <NavLink to='/formation'><button>Details</button></NavLink>
                </div>
            </div>
            <a name="valeur"></a>
            <div className="admition">
                <h1>Valeur</h1>
                <div className="left">
                    <div className="center2">
                        <img src={book} alt="" /> 
                        Cours court et faciles à digérer
                    </div>
                    <div className="center2">
                        <img src={quiz} alt="" /> 
                        Quiz pour mise en competence
                    </div>
                    <div className="center2">
                        <img src={film} alt="" /> 
                        Vidéo et graphiques attrayant
                    </div>

                </div>
                <div className="right">
                <div className="center2">
                        <img src={exercise} alt="" /> 
                        Exercices pratique et interactif 
                    </div>
                    <div className="center2">
                        <img src={compte} alt="" /> 
                        Compte  gratuit pour pratiqué
                    </div>
                    <div className="center2">
                        <img src={certificat} alt="" /> 
                        Certification à greer par l'Etat
                    </div>
                </div>
                <a name="admition"></a>
                <h2>Condition d'Admition</h2>
                <div className=".condidtion center">
                <img src={condition} alt="" /> 
                Avoir de diplome de Bacc minimum toute serie confodue
                <img src={condition} alt="" /> 
                </div>

            </div>
            <a name="contact"></a>
            <div className="contact">
                <h1>Contactez Nous</h1>
                
                        <form ref={Form} className="form" onSubmit={handleSubmit}>
                            <label htmlFor="">Votre Nom</label> <br />
                            <input type="text" name="to_name" /> <br />
                            <label htmlFor="">Email</label> <br />
                            <input type="email" name="from_name" /> <br />
                            <label htmlFor="" >Message</label> <br />
                            <input type="text" name="message"/> <br />
                            <label htmlFor=""></label> <br />
                            <input type="submit" className="send radius"/> <br />
                        </form>
                        
                
                        <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=900&amp;height=749&amp;hl=en&amp;q=Extra pizza By-pass&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                        
                        </div>
            </div>
        </div>
        <ToastContainer />
    </>
}
export default Section