//guess the name of movies
const movie="Bahubali";
let guess=prompt("Please enter your Fav Movies name");
while((guess!=movie)&&(guess!="Quit")){
    guess=prompt("Invalid enter Please try again later");
}
if (guess==movie){
    console.log("Congrats.... you inter",guess );
}
else{
    console.log("You Quit");
}