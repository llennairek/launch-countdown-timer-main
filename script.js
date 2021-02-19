const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");


let countdown = {
  days: 14,
  hours: 0,
  minutes: 00,
  seconds: 5
}

function display(){

  changeValueBefore(seconds);
  countdown.seconds -= 1;
  
  if(countdown.seconds < 0) {
    changeValueBefore(minutes)
    countdown.minutes -= 1;
    countdown.seconds = 59;    
    
    if(countdown.minutes < 0) {
      changeValueBefore(hours)
      countdown.hours -= 1;
      countdown.minutes = 59;
      changeValueAfter(minutes);
      flipIt(minutes);      
      if(countdown.hours < 0) {
        changeValueBefore(days)
        countdown.days -= 1;
        countdown.hours = 23
        changeValueAfter(hours);
        flipIt(hours);
        changeValueAfter(days);
        flipIt(days);
      } else {
        changeValueAfter(hours);
        flipIt(hours);
      }
    } else {
      changeValueAfter(minutes);
      flipIt(minutes);
    }
  }

  changeValueAfter(seconds);
  flipIt(seconds);  
}

function changeValueBefore(targ) {
  let value;
  if(targ === seconds) {
    value = "seconds"
  }
  if(targ === minutes) {
    value = "minutes"
  }
  if(targ === hours) {
    value = "hours"
  }
  if(targ === days) {
    value = "days"
  }
  
  let valeur;
  if(countdown[value] < 10){
    valeur = `0${countdown[value]}`
  } else {
    valeur = `${countdown[value]}`
  }

  targ.querySelector(".backlayer__bottom").querySelector("span").innerText = valeur;
  targ.querySelector(".front").querySelector("span").innerText = valeur;
}

function changeValueAfter(targ){
  let value;
  if(targ === seconds) {
    value = "seconds"
  }
  if(targ === minutes) {
    value = "minutes"
  }
  if(targ === hours) {
    value = "hours"
  }
  if(targ === days) {
    value = "days"
  }

  let valeur;
  if(countdown[value] < 10){
    valeur = `0${countdown[value]}`
  } else {
    valeur = `${countdown[value]}`
  }

  targ.querySelector(".backlayer__top").querySelector("span").innerText = valeur;
  targ.querySelector(".back").querySelector("span").innerText = valeur;
}

function flipIt(targ) {
  let value;
  if(targ === seconds) {
    value = "seconds"
  }
  if(targ === minutes) {
    value = "minutes"
  }
  if(targ === hours) {
    value = "hours"
  }
  if(targ === days) {
    value = "days"
  }

  let valeur;
  if(countdown[value] < 10){
    valeur = `0${countdown[value]}`
  } else {
    valeur = `${countdown[value]}`
  }

  targ.querySelector(".card-container").classList.add("flip");
  window.addEventListener("animationend", (e) => {
    targ.querySelector(".backlayer__bottom").querySelector("span").innerText = valeur;
    targ.querySelector(".front").querySelector("span").innerText = valeur;
    e.target.classList.remove("flip");
  })
}

flipIt(seconds);
flipIt(minutes);
flipIt(hours);
flipIt(days);

setInterval(() => {
  display();
}, 1000);