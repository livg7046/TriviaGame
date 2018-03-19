$(document).ready(function() {
var i = 0;
var correct = 0;
var incorrect =0;
var time = 15;
var timer;
var questions = [
      {
        "question": "When the friends are playing football in the park on thanksgiving, what nationality is the girl Joey and Chandler fight over?",
        "options": [
          "swedish",
          "russian",
          "german",
          "dutch"
        ],
        "answer": "dutch"
      },
      {
        "question": "In 'The One With Ross's Sandwich' what does he call the gravy soaked piece of bread in the centre of his sandwich?",
        "options": [
          "Moist Maker",
          "Central Moistener",
          "Gravy lake",
          "The Reviver"
        ],
        "answer": "Moist Maker"
      },
      {
        "question": "In the series 8 Halloween episode what costume does Ross wear?",
        "options": [
          "Chandler",
          "Palentologist",
          "Pink Bunny",
          "Spudnic"
        ],
        "answer": "Spudnic"
      },
      {
        "question": "What are the names of Joey's TV and chair?",
        "options": [
          "Chandler and Joey",
          "Toby and Carol",
          "Stevie and Rosita",
          "Joey Jr. and Chandler Jr."
        ],
        "answer": "Stevie and Rosita"
      },
      {
        "question": "What is Chandler Bing's middle name?",
        "options": [
          "Mimsy",
          "Adolf",
          "Douglas",
          "Muriel"
        ],
        "answer": "Muriel"
      },
      {
        "question": "What inspires Ross to name his son Ben?",
        "options": [
          "Name-tag on a janitor's uniform",
          "It is an acronym: Brilliant Excellent Newborn",
          "Monica's best sandwich recipe: Bacon, egg, noodles",
          "It is the only male name that Joey can spell"
        ],
        "answer": "Name-tag on a janitor's uniform"
      },
      {
        "question": "Who is Joey's imaginary childhood friend?",
        "options": [
          "Quimby the mutant butler",
          "Hector the nerd octopus",
          "Jambon the talking ham",
          "Maurice the space cowboy"
        ],
        "answer": "Maurice the space cowboy"
      },
      {
        "question": "What does Rachel, in a fit of jealousy, convince Ross's girlfriend Bonnie to do?",
        "options": [
          "Shave her head completely bald",
          "Change her name to Pony",
          "Eat a ghost pepper chile",
          "Get a tattoo of Ross on her calf"
        ],
        "answer": "Shave her head completely bald"
      },
      {
        "question": "What does Phoebe legally change her name to?",
        "options": [
          "Smelly Cat",
          "Princess Consuela Banana-Hammock",
          "Bandler Ching",
          "Crap Bag"
        ],
        "answer": "Princess Consuela Banana-Hammock"
      },
      {
        "question": "Which of these was not in the running as an alternate title for Friends?",
        "options": [
          "Across The Hall",
          "Insomnia Cafe",
          "The Apartmentalists",
          "Friends Like Us"
        ],
        "answer": "The Apartmentalists"
      }];

function renderQuestions(index) {
    $("#questions").text(questions[index].question);
    console.log(index);
}

function renderButtons(index) {
  $.each(questions[index].options, function(i, option){
    $("#buttons").append("<button class=\"btn-primary\">" + option + "</button>");    
  });
  
  $("button").click(function() {
    var guess = $(this).text();
    console.log(guess);
    console.log(questions[i].answer);
    checkAnswer(guess);
    newQuestion();
  });
}

function newQuestion() {
    clearTimeout(timer);
    time = 15;
    i++;
    main();
    
  }

function checkAnswer(x) {
  if(questions[i].answer === x) {
    correct++;
  }else {
    incorrect++;
  }
}

function main() {
  if(i<10) {
    console.log(i);
    $("#buttons").empty();
    renderQuestions(i);
    renderButtons(i); 
    countDown(); 
    
    
  } else {
    $("#questions").text("Correct: " + correct + "  Incorrect: " + incorrect);
    $("#buttons").hide();
    $("#timer").hide();
    clearTimeout(timer);
  }
  
}

function countDown(){
  $("#timer").text(time);
  time--;
  if(time>=0) {
    timer = setTimeout(countDown, 1000);
  } else {
    incorrect++;
    newQuestion();
  }
}

main();


});