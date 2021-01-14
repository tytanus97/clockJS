const minSize = Math.min(window.innerHeight, window.innerWidth);
document.body.style.setProperty("--window-height", `${minSize}px`);

const hLines = document.querySelectorAll(".hLine");
const degStep = 360 / 12;
const coverCircle = document.querySelector(".hLineCover");
const radius = coverCircle.clientWidth/2;

for ([index, hline] of hLines.entries()) {
  const hourNum = Array.from(hline.classList)[1];

  const element = document.createElement('div');
  element.innerText = hourNum;
  element.style.position = "absolute";
  element.classList.add("num-indicator");
  element.style.transform = "translate(-50%,-50%)";

  const position = calculatePosition(degStep,radius,index);
  element.style.top = radius + position.posy + "px";
  element.style.left = radius + position.posx + "px";
  coverCircle.appendChild(element);
  hline.style.transform += `rotate(${degStep * (index)}deg`;
}
initTick();

function calculatePosition(degStep,radius,index) {

    const angle = (((degStep) * (index)) * Math.PI / 180);
    const posx = Math.round((radius - 0.15 * radius) * Math.cos(angle))
    const posy = Math.round((radius - 0.15 * radius) * Math.sin(angle))
  
    return {posx:posx,
        posy:posy};
}

function initTick() {

    const standardTranslate = 'translate(-50%,-100%)';

    const sIndc = document.querySelector(".secIndc");
    const hIndc = document.querySelector(".hourIndc");
    const mIndc = document.querySelector(".minuteIndc");
    const angleStep = 360/60;
    let angle = 0;

  


     setInterval(() => {
        const initDate = new Date();
        sIndc.style.transform = standardTranslate + ` rotate(${initDate.getSeconds() * angleStep}deg)`;
        mIndc.style.transform = standardTranslate + ` rotate(${initDate.getMinutes() * angleStep}deg)`;
        hIndc.style.transform = standardTranslate + ` rotate(${initDate.getHours() * degStep
            + initDate.getMinutes()/60 * degStep}deg)`;
    },1000)

  
  /*   hIndc.style.transform += `rotate(${30}deg)`; */

    
}