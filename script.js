let imageOne = document.querySelector(".carousel-one");
let imageTwo = document.querySelector(".carousel-two");
let imageThree = document.querySelector(".carousel-three");
let imageFour = document.querySelector(".carousel-four");
let forwardOne = document.querySelector("#forwardOne");
let forwardTwo = document.querySelector("#forwardTwo");
let forwardThree = document.querySelector("#forwardThree");
let forwardFour = document.querySelector("#forwardFour");
let backOne = document.querySelector("#backOne");
let backTwo = document.querySelector("#backTwo");
let backThree = document.querySelector("#backThree");
let backFour = document.querySelector("#backFour");


forwardOne.onclick=function(){
  imageOne.style.display="none";
  imageTwo.style.display="block";
  imageThree.style.display="none";
  imageFour.style.display="none";
}

backOne.onclick=function(){
  imageOne.style.display="none";
  imageTwo.style.display="none";
  imageThree.style.display="none";
  imageFour.style.display="block"
}

forwardTwo.onclick=function(){
  imageOne.style.display="none";
  imageTwo.style.display="none";
  imageThree.style.display="block";
}

backTwo.onclick=function(){
  imageOne.style.display="block";
  imageTwo.style.display="none";
  imageThree.style.display="none";
  imageFour.style.display="none";
}

forwardThree.onclick=function(){
  imageOne.style.display="none";
  imageTwo.style.display="none";
  imageThree.style.display="none";
  imageFour.style.display="block";
}

backThree.onclick=function(){
  imageOne.style.display="none";
  imageTwo.style.display="block";
  imageThree.style.display="none";
  imageFour.style.display="none";
}


forwardFour.onclick=function(){
  imageOne.style.display="block";
  imageTwo.style.display="none";
  imageThree.style.display="none";
  imageFour.style.display="none";
}

backFour.onclick=function(){
  imageOne.style.display="none";
  imageTwo.style.display="none";
  imageThree.style.display="block";
  imageFour.style.display="none";
}














