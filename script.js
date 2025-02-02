 const ShareButton=document.getElementById('share_button');
 const LinksToShare=document.querySelector('.share_links');
 let n=0;
 ShareButton.addEventListener('click',()=>{
    if(n%2==0){
        ShareButton.style.backgroundColor="hsl(217, 19%, 35%)";
        ShareButton.style.color="hsl(210, 46%, 95%)";
        LinksToShare.style.opacity="1";
     
    }
    else{
        ShareButton.style.backgroundColor="hsl(210, 46%, 95%)";
        ShareButton.style.color="hsl(217, 19%, 35%)";
        LinksToShare.style.opacity="0";
    }
    n+=1;
    


 })
