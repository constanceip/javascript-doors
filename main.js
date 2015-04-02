// var animate;
// var titleObj = document.getElementById('title');
//    titleObj.style.position= 'relative'; 
//    titleObj.style.left = '0px'; 

// function moveRight(){
//    titleObj.style.left = parseInt(titleObj.style.left) + 10 + 'px';
//    animate = setInterval(moveRight(),20); 
// }
// window.onload=moveRight();

// Door appending & prompt
$("#menu1").append("<div id='door1'>Door Number 1</div>");
$("#menu2").append("<div id='door2'>Door Number 2</div>");
$("#menu3").append("<div id='door3'>Door Number 3</div>");
$("#menu4").append("<div id='door4'>Door Number 4</div>");

var menus = ["Pork tenderloin &amp; french lentils with parsley lemon butter", "Dill &amp; garlic baked salmon, braised swiss chard, vegetable brown rice", "Pan-seared pork chops, yellow lentils with spinach and ginger", "Turkey meatloaf &amp; tomato basil sauce on a bed of crispy polenta cakes with rosemary sauteed squash"];
 
function question() {
  var answer = prompt("Which door will you choose? 1, 2, 3, or 4?");
  var answer = parseInt(answer);
  if (answer===1){
    $("#door1").remove();
    document.getElementById("menu1").innerHTML = menus[0];
  	} 
  else if(answer===2){
    $("#door2").remove();
    document.getElementById("menu2").innerHTML = menus[1];
  	} 
  else if (answer===3){
    $("#door3").remove();
    document.getElementById("menu3").innerHTML = menus[2];
  	}
  else{
    $("#door4").remove();
    document.getElementById("menu4").innerHTML = menus[3];
  	}	
}
	

