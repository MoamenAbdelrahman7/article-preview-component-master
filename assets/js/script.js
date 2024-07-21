const shareBt=document.getElementById("shareBt");
const sharePopup= document.getElementById("share-popup");
shareBt.addEventListener("click",()=>{
      if(screen.width >426){
   if (sharePopup.style.display === "" || sharePopup.style.display === "none"){
    sharePopup.style.display="flex";
    shareBt.style.backgroundColor="hsl(217, 19%, 35%)";
    shareBt.querySelector("img").style.filter="brightness(0) invert(1)";
    // this propert from gemini <filter="brightness(0) invert(1)">
   }
   else if (sharePopup.style.display === "flex"){
         sharePopup.style.display="none";
         shareBt.style.backgroundColor="hsl(210, 46%, 95%)";
         shareBt.querySelector("img").style.filter="none";
   }
}
   else if(screen.width <= 426){
      if (sharePopup.style.display === "" || sharePopup.style.display === "none"){
            sharePopup.style.display="flex";
            shareBt.style.backgroundColor="hsl(214, 17%, 51%)";
            shareBt.querySelector("img").style.filter="brightness(0) invert(1)";
      }
      else if (sharePopup.style.display === "flex"){
            shareBt.style.backgroundColor="hsl(210, 46%, 95%)";
            sharePopup.style.display="none";
            shareBt.querySelector("img").style.filter="none";
             
           }
   }
});
