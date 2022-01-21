function openNav() {
  document.getElementById("navbar").style.width = "50%";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
}

function opencontacts() {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  var btn5 = document.getElementById("btn5");

  //design for btn2//
  //btn2.style.transform = "translateY(-60px)";//
  btn2.style.transition = "ease-in";
  btn2.style.transitionDuration = "0.7s";
  btn2.style.transitionDelay = "0.3s";
  btn2.style.color = "black";
  btn2.style.backgroundColor = "white"

  //design for btn3//
  //btn3.style.transform = "translateY(-60px)";//
  btn3.style.transition = "ease-in";
  btn3.style.transitionDuration = "0.7s";
  btn3.style.transitionDelay = "0.5s";
  btn3.style.color = "black";
  btn3.style.backgroundColor = "white"

  //design for btn4//
  //btn4.style.transform = "translateY(-60px)";//
  btn4.style.transition = "ease-in";
  btn4.style.transitionDuration = "0.5s";
  btn4.style.transitionDelay = "0.7s";
  btn4.style.color = "black";
  btn4.style.backgroundColor = "white"

  //design for btn5//
  //btn5.style.transform = "translateY(-60px)";//
  btn5.style.transition = "ease-in";
  btn5.style.transitionDuration = "0.5s";
  btn5.style.transitionDelay = "0.8s";
  btn5.style.color = "black";
  btn5.style.backgroundColor = "white";

  btn1.style.display = "none";
}
function closeContacts() {
  var btn1 = document.getElementById("btn1");
  var btn6 = document.getElementById("btn6");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  var btn5 = document.getElementById("btn5");
  //design for btn2//
  //btn2.style.transform = "translateY(0px)";//
  btn2.style.transition = "ease-out";
  btn2.style.transitionDuration = "0.7s";
  btn2.style.transitionDelay = "0.3s";
  btn2.style.color = "black";
  btn2.style.backgroundColor = "white"
  btn2.style.backgroundColor = "Transparent"
  btn2.style.color = "Transparent"

  //design for btn3//
  //btn3.style.transform = "translateY(60px)";//
  btn3.style.transition = "ease-out";
  btn3.style.transitionDuration = "0.7s";
  btn3.style.transitionDelay = "0.5s";
  btn3.style.color = "black";
  btn3.style.backgroundColor = "white"
  btn3.style.backgroundColor = "Transparent"
  btn3.style.color = "Transparent"

  //design for btn4//
  //btn4.style.transform = "translateY(120px)";//
  btn4.style.transition = "ease-out";
  btn4.style.transitionDuration = "0.5s";
  btn4.style.transitionDelay = "0.7s";
  btn4.style.color = "black";
  btn4.style.backgroundColor = "white"
  btn4.style.backgroundColor = "Transparent"
  btn4.style.color = "Transparent"

  //design for btn5//
  //btn5.style.transform = "translateY(180px)";//
  btn5.style.transition = "ease-out";
  btn5.style.transitionDuration = "0.5s";
  btn5.style.transitionDelay = "0.8s";
  btn5.style.color = "black";
  btn5.style.backgroundColor = "Transparent"
  btn5.style.color = "Transparent"


  btn1.style.display = "block";
  btn1.style.zIndex ="100"
  btn1.style.marginBottom = "1px"
}