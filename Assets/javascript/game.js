// // Pick the word for the user to guess
//   let wordG = ""

//   function randomWord(){
//     let randomNumber = Math.floor(Math.random()*10)
//     // console.log(randomNumber)
//     if(randomNumber<5){
//       wordG = "motor"
//     } else{
//       wordG = "exhaust"
//     }
//   }
//   window.addEventListener("load", randomWord());


// // Update the number of blanks
  
//   const wordtoGuess = $("#mini-box-right-1");

//   for (let i=0; i<wordG.length; i++){
//     const newLetter = $("<div>"+"</div>");
//     $(newLetter).addClass("blank-div");
//     $(newLetter).attr('id', 'letter-'+i);
//     wordtoGuess.append(newLetter);
//   }

// /// Guess letters to try to win

//   window.addEventListener("keyup", checkGuess);

//   let guessCounterWrong = 0;
//   let guessCounterRight = 0;
//   let maxguesses = 6
//   const matchedIndices = [];
//   function checkGuess(event) {
//     console.log(event.key);

//     if(wordG.indexOf(event.key) === -1){
//       guessCounterWrong++;
//       console.log(guessCounterWrong);
//       maxguesses--;
//       $("#guessesRemaining").text(maxguesses);
//       checkloss();
//       adddiv();
//     }

//     for(let i = 0; i < wordG.length; i++) {
//       if(wordG[i] === event.key) {
//         matchedIndices.push(i);
//         // console.log(matchedIndices);
//         $('#letter-'+i).html(event.key);
//         checkwin();
//       }

//     }
//   }

//   const guessesRemaining = 7
//   function checkloss(){
//     if(guessCounterWrong === 6){
//       alert("You lose.");
//     }   
//   }

//   const song = new Audio("running.mp3");
//   function checkwin(){
//     if (matchedIndices.length == wordG.length){
//       $("#mini-box-left").html('<div id="vanhalen"><img src="Assets/images/vanhalen.jpg" height="236" width="450" margin="auto"></div>');
//       alert("You win.");
//       song.play();
//     }
//   }
  
//   function adddiv(){
//     $('#mini-box-right-3').append(event.key);  
//   }