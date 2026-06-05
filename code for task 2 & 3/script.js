const toggle =
document.getElementById(
"themeToggle"
);

if(toggle){

toggle.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"light-mode"
);

});

}


const btn =
document.getElementById(
"changeContent"
);

const hero =
document.getElementById(
"heroTitle"
);

if(btn){

btn.addEventListener(
"click",
()=>{

hero.innerText =

"Interactive Luxury Interior Experience";

btn.innerText =

"Experience Activated";

});

}


function animateCounter(
id,
target
){

let count = 0;

const el =
document.getElementById(id);

if(!el) return;

const interval =
setInterval(()=>{

count += 5;

el.innerText = count;

if(count >= target){

clearInterval(interval);

}

},30);

}

animateCounter(
"counter1",
120
);

animateCounter(
"counter2",
350
);

animateCounter(
"counter3",
45
);

/* NAVBAR SCROLL ANIMATION */

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 80){

navbar.classList.add(
"scrolled"
);

}

else{

navbar.classList.remove(
"scrolled"
);

}

});

const form =
document.querySelector("form");

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Message Sent Successfully!"
);

});

}