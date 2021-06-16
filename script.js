var showcase = document.getElementById("showcase");
console.log(showcase)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        showcase.querySelector("button").classList.toggle("startbtn",true);
        showcase.querySelector(".fa-envelope").classList.toggle("d-none",false);
        showcase.querySelector(".showtextbtn").classList.toggle("d-none",true);
        

    } else {
        showcase.querySelector("button").classList.toggle("startbtn",false);
        showcase.querySelector(".fa-envelope").classList.toggle("d-none",true);
        showcase.querySelector(".showtextbtn").classList.toggle("d-none",false);
    }
  }