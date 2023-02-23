
const countToDate= new Date().setHours(new Date().getHours() + 24);
let previousTimeBetweenDates;


setInterval(() => {
    const currentDate= new Date();
    const timeBetweenDates= Math.ceil((countToDate - currentDate) / 1000);

    if(previousTimeBetweenDates !== timeBetweenDates){
        flipAllCards(timeBetweenDates);

    }
    previousTimeBetweenDates= timeBetweenDates;
    
}, 250);




function flipAllCards(time){
    const seconds = time % 60
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
  
    flip(document.querySelector("[data-hours-tens]"), hours)
    flip(document.querySelector("[data-minutes-tens]"), minutes)
    flip(document.querySelector("[data-seconds-tens]"), seconds)
}





function flip(flipCard, newNumber){
    const topHalf= flipCard.querySelector(".top");
    const startNumber= parseInt(topHalf.textContent);


    if(newNumber === startNumber) return;


    const bottomHalf= flipCard.querySelector(".bottom");
    const topFlip= document.createElement("div");
    topFlip.classList.add("top-flip")
    const bottomFlip= document.createElement("div");
    bottomFlip.classList.add("bottom-flip");


    top.textContent= startNumber;
    bottomHalf.textContent= startNumber;
    topFlip.textContent= startNumber;
    bottomFlip.textContent= newNumber;


    topFlip.addEventListener("animationstart", e => {
        topHalf.textContent= newNumber;
    })

    topFlip.addEventListener("animationend", e => {
        topFlip.remove();
    })


    bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent= newNumber;
        bottomFlip.remove();
        //flip(flipCard);
    })
    flipCard.append(topFlip, bottomFlip);

   
}

