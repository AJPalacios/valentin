alert("conectado")

function fondo(){
  var el = document.getElementById('#ecommerce');
  var arrowNext = document.getElementByClassName("controlArrow next")
   
  arrowNext.addEventListener("click",()=>{
    el.classList.add('background-perfume');
  });

    

}