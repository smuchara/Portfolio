function openNav() {
    document.getElementById("navbar").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("navbar").style.width = "0";
  }

  function opencontacts(){
    var btn1 = document.getElementById("btn1");
    var btn2 =  document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    btn1.classList = "class='fas fa-times-circle'";
    
    //design for btn2//
    btn2.style.marginBottom = "60px"
    btn2.style.color = "black";
    btn2.style.backgroundColor = "white"

     //design for btn3//
    btn3.style.transform = "translateY(-60px)";
    btn3.style.transition = "ease-in";
    btn3.style.transitionDuration = "0.7s";
    btn3.style.transitionDelay = "0.5s";
    btn3.style.color = "black";
    btn3.style.backgroundColor = "white"

    //design for btn4//
    btn4.style.transform = "translateY(-60px)";
    btn4.style.transition = "ease-in";
    btn4.style.transitionDuration = "0.7s";
    btn4.style.transitionDelay = "1s";
    btn4.style.color = "black";
    btn4.style.backgroundColor = "white"

      //design for btn5//
      btn5.style.transform = "translateY(-60px)";
      btn5.style.transition = "ease-in";
      btn5.style.transitionDuration = "0.7s";
      btn5.style.transitionDelay = "1.5s";
      btn5.style.color = "black";
      btn5.style.backgroundColor = "white"
  }