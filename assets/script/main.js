//Constants
let frontend = document.querySelector("a:nth-of-type(1)");
let design = document.querySelector("a:nth-of-type(2)");
let and = document.querySelector("a:nth-of-type(3)");
let dev = document.querySelector("a:nth-of-type(4)");
let s5 = document.querySelector("a:nth-of-type(5)");
let fix = document.querySelector("a:nth-of-type(6)");
let the = document.querySelector("a:nth-of-type(7)");
let flow = document.querySelector("a:nth-of-type(8)");
let user = document.querySelector("a:nth-of-type(9)");
let iface = document.querySelector("a:nth-of-type(10)");

let interaction = document.querySelector("a:nth-of-type(12)");
let help = document.querySelector("h2:nth-of-type(1)");
let hide = document.querySelector(".hide");

//Events
interaction.addEventListener("click", jumpHandler);
and.addEventListener("mouseover", andHandler);
design.addEventListener("dblclick", growHandler);
s5.addEventListener("mouseenter", sprintHandler);
user.addEventListener("click", userHandler);
iface.addEventListener("click", ifaceHandler);

//Animationed
interaction.addEventListener("animationend", jumpHandler);
and.addEventListener("animationend", andHandler);
design.addEventListener("animationend", growHandler);

//Handlers
function jumpHandler() {
  interaction.classList.toggle("jump");
}
function growHandler() {
  design.classList.toggle("grow");
}
function andHandler() {
  and.classList.toggle("and");
}
function sprintHandler() {
  s5.classList.toggle("sprint");
}
function userHandler() {
  user.classList.toggle("user");
}
function ifaceHandler() {
  iface.classList.toggle("iface");
}

//Keys
document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.key === "1") {
    // Check if the pressed key is 'e'
    frontend.classList.toggle("change");
  }
  if (e.key === " ") {
    if (help.style.display === "flex") {
      help.style.display = "none";
      hide.style.marginTop = hide.style.marginTop === "0px" ? "" : "0px";
    } else {
      help.style.display = "flex";
      hide.style.marginTop = "";
    }
  }
}

document.addEventListener("keyup", checkKeyUp, false);

function checkKeyUp(a) {
  if (a.key === "2") {
    dev.classList.toggle("change");
  }
}

document.addEventListener("keydown", checkKeyDown, false);

function checkKeyDown(c) {
  if (c.key === "3") {
    the.classList.toggle("change");
  }
  if (c.key === "y") {
    flow.classList.toggle("flip-text-y");
  }
  if (c.key === "x") {
    fix.classList.toggle("flip-text-x");
  }
}
