import React from "react";
import Header from './header';
import leveli from '../img/leveli.png'
import levelii from '../img/level2.png'
import leveliii from '../img/level3.png'
import Footer from './footer';
const Formation =()=>{
    
    return <>
       <Header/>
       <div className="cat ">

       </div>
       <div className="level ">
                
            <div className="left">
                <b>Level I</b>
                <p>
                    Idéal pour la première étape dans le monde de al bourse , les cours vous emmènent dans un tours des marchés financièrs y compris les actions ,les indices ,le forex et les matières premières
                    <br />Vous decouvirez comment chaque marché fonctionne ,ce qui le motive et surtout ,comment vous pouriez capitaliser  sur ses mouvements
                </p>        
            </div> 
            <div className="right center">
                <img src={leveli} alt="" />
            </div>
            
            <div className="right ">
                <b>Level II</b>
                <p>
                    Bien que de nombreux traders insistent sur l'utilisation de l'analyse technique pour le trading ,l'autre groupe ne l'aimepas et selon leur croyance ,il est le plus facile de se concentrer en trading en utilisant les nouveles et les facteurs économiques .Ils croient qu'il y a une nouvelles dernières chaque mouvements du marché.Cette façons de négocier s'appelle l'analyse fondamentale
                    <br />
                    D'un coté ,l'analyse technique peut vous aider à comprendre comment le comportement des investisseurs détermine les prix du marché .Dans ce  cours nous montrons comment commencer à utiliser des graphiques pour prévoir dans quelle destination un marché pourrait évoluer ,vous aidant à réperer les opportunité de trading poténtiels  
                </p>        
            </div>
            
            <div className="left center">
            <img src={leveliii} alt="" />
            </div>
            <div className="left">
            <b>Level III</b>
                <p>
                Dans ce cours ,nous passerons en revue les règles simples que vous pouver suivre pour vous aider à gérer les risques du trading et à metenir votre rentabilité <br />
                Ensuite, vous obtiendrez une introduction approfondie aux options comment elles fonctionnent , les avantages qu'elles offrent et leurs risqus que vous devez comprendre
                    
                </p>        
            </div> 
            <div className="right center leve">
                <img src={levelii} alt="" />
            </div>
       </div>
      
    </>
}
export default Formation;