// Declare variables below to save the different divs of your story.

let storyOpening = document.querySelector(".story-opening");
let buttonOption1 = document.querySelector(".option-one");
let buttonOption2 = document.querySelector(".option-two");
let buttonOption1_2 = document.querySelector(".option-one-2");
let buttonOption2_2 = document.querySelector(".option-two-2");
let option1Screen = document.querySelector(".option-one-screen");
let option2Screen = document.querySelector(".option-two-screen");
let option1End = document.querySelector(".option-one-end");
let option2End = document.querySelector(".option-two-end");
let restart = document.querySelector(".restart");




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

option1Screen.style.display = 'none';

buttonOption1.addEventListener('click', function(){
    option1Screen.style.display = 'block';
    buttonOption1.style.display = "none";
    buttonOption2.style.display = 'none';
    storyOpening.style.display = 'none';
    restart.style.display = 'block';


});

 buttonOption2.addEventListener('click', function(){
    option2Screen.style.display = 'block';
    buttonOption1.style.display = "none";
    buttonOption2.style.display = 'none';
    storyOpening.style.display = 'none';
    buttonOption1_2.style.display = 'block';
    buttonOption2_2.style.display = 'block';    
 });

 restart.addEventListener('click', function(){
    storyOpening.style.display = 'block';
    buttonOption1.style.display = "block";
    buttonOption2.style.display = 'block';
    option1Screen.style.display = 'none';
    option2End.style.display = 'none';
    restart.style.display = 'none';
    option1End.style.display = 'none';

});

 buttonOption1_2.addEventListener('click', function(){
    option1End.style.display = 'block';
    buttonOption1_2.style.display = "none";
    buttonOption2_2.style.display = 'none';
    option2Screen.style.display = 'none';
    restart.style.display = 'block';
 });

 buttonOption2_2.addEventListener('click', function(){
    option2End.style.display = 'block';
    buttonOption1_2.style.display = "none";
    buttonOption2_2.style.display = 'none';
    option2Screen.style.display = 'none';
    restart.style.display = 'block';
 });