import React from "react";
import explication from '../video/video.mp4'
const Video=()=>{
    const handleclick=()=>{
        document.getElementById("video").style.display="none"
    }
    return <>
        <a name="video"></a>
        <div className="vide" id="video">
            
            <div>
                <video src={explication} controls></video>
            </div>
            <button onClick={handleclick} className="quit">Quitter</button>
            
            
        </div>
    </>
}
export default Video