import React from "react";
import facebook from '../img/facebook.png'
import email from '../img/mail.png'
import linkeding from '../img/linkeding.png'
import phone from '../img/phone.png'
const footer =()=>{
    return <>
        <div className="footer">
            <h5>Reseaux sociaux</h5>
            <div className="center2">
                <div className="part ">
                    <img src={facebook} alt="" />
                    <h5>Fampiofanana Mikasika Trading</h5>
                    
                </div>
                <div className="part">
                    <img src={email} alt="" />
                    <h5>manambina1512@gmail.com</h5>
                </div>
                <div className="part">
                    <img src={linkeding} alt="" />
                    <h5>Aska Institut Madagascar</h5>
                </div>
                <div className="part ">
                    <img src={phone} alt="" />
                    <h5>+261345082822</h5>
                </div>
            </div>
        </div>
    </>
}
export default footer