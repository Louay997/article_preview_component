 const ShareButton=document.getElementById('share_button');
 const LinksToShare=document.querySelector('.share_links');

 ShareButton.addEventListener('click',()=>{
    ShareButton.style.backgroundColor="hsl(217, 19%, 35%)";
    ShareButton.style.color="hsl(210, 46%, 95%)";
    LinksToShare.style.opacity="1";


 })