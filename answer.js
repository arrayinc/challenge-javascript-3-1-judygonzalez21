// *** YOUR ANSWER BELOW ***

const beerEnd = " bottles of beer."
const beer = " bottles of beer"
const wall = " on the wall."
const takeOne = " You take one down, pass it around. "

function beerSong(n){
  let line = "";

    for(let i = n; i >= 1; i--){

        line += i + beer + wall + "\n" + takeOne + "\n";

         let oneDown = i - 1;

        line += oneDown + beerEnd + "\n";
    }  return console.log(line);
}

beerSong(99)
