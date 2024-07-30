setTimeout(function(){
    var img=document.getElementById("header").cloneNode(true);
    img.id="copy";
    document.body.appendChild(img);
    document.getElementById("copy").align="left";
    document.getElementById("header").align="right";

 document.getElementById("nav").style.listStyleType="circle";


},2000)
