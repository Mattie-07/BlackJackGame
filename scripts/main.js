// window.addEventListener("click"

suit = ["clubs", "diamonds", "hearts" ," spades"];
attribute = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10, 11, 12, 13];
cards = []

for (suitz = 4; suitz.length > 0 ; suitz++){
        for(attributez = 13 ; attributez > 0 ; attributez++){
                {
                        cards.push({
                        suit: suitz,
                        attribute: attributez
                        })


                }



        }
        console.log(cards);
}

// Conversation with Veronica
// dont forget to concat with the values
// objext needs to reference the url in html
// pass the array to the shuffle Object

//create an array that can take all of the cards. 

//first step is to retrieve the object we want to use.
// I could append the correct element so that when the button is clicked the image is added to that element to be shown.

var hitMe = document.querySelector("#hit-button");
var dealCards = document.querySelector("#deal-button");
var stand = document.querySelector("#stand-button");
// var oneImage = document.querySelector("onePic");




//add the event listener

hitMe.addEventListener("click", (e) =>{
        if(e.target.id === "hit-button"){
                var oneImage1 = document.createElement("img");
                oneImage1.src = "images/9_of_clubs.png";
                var dealingHand = document.querySelector("#dealer-hand");
                dealingHand.appendChild(oneImage1);
        }
                
})              
dealCards.addEventListener("click", (e) =>{
        if(e.target.id === "deal-button"){
                var oneImage1 = document.createElement("img");
                oneImage1.src = "images/9_of_clubs.png";
                var dealingHand = document.querySelector("#player-hand");
                dealingHand.appendChild(oneImage1);
        }
                
})              


// There are 52 cards, and 4 different suits with , all numbered between 1 and 13.



