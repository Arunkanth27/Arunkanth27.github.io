const hamurger=document.querySelector(".hamburger");
const navlinks=document.querySelector(".nav-links");
const links=document.querySelectorAll(".nav-links li");
const cross1=document.querySelector(".cross1");
const cross2=document.querySelector(".cross2");
const cross=document.querySelector(".cross");



const  afterclick=document.querySelector(".nav-links li a");
const  about=document.querySelector(".about");
const  education=document.querySelector(".education");
const  skills=document.querySelector(".skills");
const  contact=document.querySelector(".contact");


hamurger.addEventListener("click", myfunction);


function myfunction(){
    navlinks.classList.toggle("open");
    cross1.classList.toggle("open1");
    cross2.classList.toggle("open2");
    cross.classList.toggle("open3");
 
}


if (afterclick.addEventListener) {
    afterclick.addEventListener("click", myFunction);
  }
  function myFunction()
  {
     myfunction();
  }
 

  about.addEventListener("click",()=>
  {
    myfunction();
  });

  education.addEventListener("click",()=>
  {
    myfunction();
  });

  skills.addEventListener("click",()=>
  {
    myfunction();
  });
  contact.addEventListener("click",()=>
  {
    myfunction();
  });

