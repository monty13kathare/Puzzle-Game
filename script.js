const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e){
  let clickedCard = e.target; // getting user clicked card
 if(clickedCard !== cardOne && !disableDeck){
   clickedCard.classList.add("flip");
   if(!cardOne){
     // return the cardOne value to clickedCard
     return cardOne = clickedCard;
   }
   cardTwo = clickedCard;
   disableDeck = true;
   let cardIOneImg = cardOne.querySelector("img").src,
   cardTwoImg = cardTwo.querySelector("img").src;
   matchCards(cardIOneImg, cardTwoImg);
 }
}

function matchCards(img1, img2){
  if(img1 === img2){ // if two cards img matched
    matchedCard++; // increment matched value by 1
    //  if matched value is 8 that means user has matched all the
    if(matchedCard == 8){
      return shuffleCard();
    }
 cardOne.removeEventListener("click",flipCard);
 cardTwo.removeEventListener("click",flipCard);
 cardOne = cardTwo = ""; //setting both card value to blank
 return disableDeck = false;
  }
  //if two card not matched
  setTimeout(()=> {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  },400);

  setTimeout(()=> {
    //  removing both shake & flip classes from the both card after 1.2 seconds
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake","flip");
    cardOne = cardTwo = ""; //setting both card value to blank
    disableDeck = false;
  },1200);
}

function shuffleCard(){
  matchedCard = 0;
  cardOne = cardTwo = "";
  disableDeck = false;
  // creating array of 16 items and each item is repeated twice
  let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
  arr.sort(()=> Math.random() > 0.5 ? 1 : -1); //sorting array item randomly

  //  removing flip class from all cards and passing random image to each card 
  cards.forEach((card,index) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector("img");
    imgTag.src = `/images/bird${arr[index]}.png`
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

cards.forEach(card => { //adding click event to all cards
    card.addEventListener("click",flipCard);
});