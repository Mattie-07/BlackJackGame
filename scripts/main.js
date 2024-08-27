// window.addEventListener("click"

suit = ["clubs", "diamonds", "hearts", " spades"];
cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
cards = [];

for (cardSuit = 4; cardSuit.length > 0; cardSuit++) {
  for (attribute = 13; attribute > 0; attribute++) {
    {
      cards.push({
        suit: cardSuit,
        cardNumber: attribute,
      });
    }
  }
  console.log(cards);
}
// dont forget to concat with the values
// objext needs to reference the url in html
// pass the array to the shuffle Object

//create an array that can take all of the cards.

//first step is to retrieve the object we want to use.
// I could append the correct element so that when the button is clicked the image is added to that element to be shown.

const hitMe = document.querySelector("#hit-button");
const dealCards = document.querySelector("#deal-button");
const stand = document.querySelector("#stand-button");
// var oneImage = document.querySelector("onePic");

//add the event listener

hitMe.addEventListener("click", (e) => {
  if (e.target.id === "hit-button") {
    var oneImage1 = document.createElement("img");
    oneImage1.src = "images/9_of_clubs.png";
    var dealingHand = document.querySelector("#dealer-hand");
    dealingHand.appendChild(oneImage1);
  }
});
dealCards.addEventListener("click", (e) => {
  if (e.target.id === "deal-button") {
    var oneImage1 = document.createElement("img");
    oneImage1.src = "images/9_of_clubs.png";
    var dealingHand = document.querySelector("#player-hand");
    dealingHand.appendChild(oneImage1);
  }
});
