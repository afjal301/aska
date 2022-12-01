function reduit(id){
    const flex=document.getElementById(id).style.display
    if(flex=="flex"){
        document.getElementById(id).style.display="none"
    }else{
        document.getElementById(id).style.display="flex"
    }
}