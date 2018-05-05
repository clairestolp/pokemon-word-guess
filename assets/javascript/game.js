var pokemon = [
    {
      "name": "Bulbasaur",
      "number": 1,
      "type": "grass/poison",
      "img": "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/240px-001Bulbasaur.png",
    },
    {
      "name": "Ivysaur",
      "number": 2,
      "type": "grass/poison",
      "img": "https://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png",
    },
    {
      "name": "Venusaur",
      "number": 3,
      "type": "grass/poison",
      "img": "https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/240px-003Venusaur.png",
    },
    {
      "name": "Charmander",
      "number": 4,
      "type": "Fire",
      "img": "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/240px-004Charmander.png",
    },
    {
      "name": "Charmeleon",
      "number": 5,
      "type": "Fire",
      "img": "https://cdn.bulbagarden.net/upload/4/4a/005Charmeleon.png",
    },
    {
      "name": "Charizard",
      "number": 6,
      "type": "Fire/Flying",
      "img": "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/240px-006Charizard.png",
    },
    {
      "name": "Squirtle",
      "number":  7,
      "type": "Water",
      "img": "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/240px-007Squirtle.png",
    },
    {
      "name": "Wartortle",
      "number": 8,
      "type": "Water",
      "img": "https://cdn.bulbagarden.net/upload/0/0c/008Wartortle.png",
    },
    {
      "name": "Blastoise",
      "number": 9,
      "type": "https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/240px-009Blastoise.png"
    },
    {
      "name": "Caterpie",
      "number": 10,
      "type": "Bug",
      "img": "https://cdn.bulbagarden.net/upload/5/5d/010Caterpie.png",
    },
    {
      "name": "Metapod",
      "number": 11,
      "type": "Bug",
      "img": "https://cdn.bulbagarden.net/upload/c/cd/011Metapod.png",
    },
    {
      "name": "Butterfree",
      "number": 12,
      "type": "Bug/Flying",
      "img": "https://cdn.bulbagarden.net/upload/thumb/d/d1/012Butterfree.png/240px-012Butterfree.png",
    },
    {
      "name": "Weedle",
      "number": 13,
      "type": "Bug/Poison",
      "img": "https://cdn.bulbagarden.net/upload/d/df/013Weedle.png",
    },
    {
      "name": "Kakuna",
      "number": 14,
      "type": "Bug/Poison",
      "img": "https://cdn.bulbagarden.net/upload/thumb/f/f0/014Kakuna.png/240px-014Kakuna.png",
    },
    {
      "name": "Beedrill",
      "number": 15,
      "type": "Bug/Poison",
      "img": "https://cdn.bulbagarden.net/upload/thumb/6/61/015Beedrill.png/240px-015Beedrill.png",
    },
    {
      "name": "Pidgey",
      "number": 16,
      "type": "Normal/Flying",
      "img": "https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/240px-016Pidgey.png",
    },
    {
      "name": "Pidgeotto",
      "number": 17,
      "type": "Normal/Flying",
      "img": "https://cdn.bulbagarden.net/upload/thumb/7/7a/017Pidgeotto.png/240px-017Pidgeotto.png",
    },
    {
      "name": "Pidgeotto",
      "number": 18,
      "type": "Normal/Flying",
      "img": "https://cdn.bulbagarden.net/upload/thumb/5/57/018Pidgeot.png/240px-018Pidgeot.png",
    },
    {
      "name": "Rattata",
      "number": 19,
      "type": "Normal",
      "img": "https://cdn.bulbagarden.net/upload/thumb/4/46/019Rattata.png/240px-019Rattata.png",
    },
    {
      "name": "Raticate",
      "number": 20,
      "type": "Normal",
      "img": "https://cdn.bulbagarden.net/upload/thumb/f/f4/020Raticate.png/240px-020Raticate.png",
    }
];

var rng = Math.floor(Math.random() * 21 - 1);
console.log('rng', rng);
var guesses = 6;
var lettersUsed = '';
var problemArr = [];
var solutionArr = [];
var replaced = false;


function generateProblem (length, input, index) {
  var problemString = '';

  if(!input){
    input = '_';
    for (var i = 0; i < length; i++){
      problemArr.push(input);
      solutionArr.push(pokemon[rng].name.charAt(i).toUpperCase());
    }
  }else{
    if(lettersUsed.includes(input)){
      return alert('You already picked that letter');
    }
    problemArr[index] = input;
    solutionArr[index] = '_';
    console.log(solutionArr);
    }

    for(var j = 0; j < length; j++){
      problemString = problemString + ' ' + problemArr[j];
    }


    problem.html(problemString);
  }


console.log(pokemon[rng]);
var question = $('<p>');
var problem = $('<p>');

question.html('Who\'s that pokemon?');
$('#problem').append(question);
$('#problem').append('<br>');
generateProblem(pokemon[rng].name.length);
$('#problem').append(problem);
console.log(solutionArr);


document.onkeyup = function () {
  if(replaced === true) {
    location.reload();
  }
  var userInput = event.key.toUpperCase();
  console.log("user input: ", userInput);
  var pokename = pokemon[rng].name.toUpperCase();

  if(problemArr.includes(userInput)){
    return alert('You already guessed that letter!');
  }

  if (userInput.charCodeAt(0) <= 90 && userInput.charCodeAt(0) >= 65 && userInput.length === 1){
    if(!solutionArr.includes(userInput)){
      guesses--;
      lettersUsed = lettersUsed + ' ' + userInput;
    }else{
      while(solutionArr.includes(userInput)){
        generateProblem(problemArr.length, userInput.toUpperCase(), solutionArr.indexOf(userInput));
      }
      lettersUsed = lettersUsed + ' ' + userInput;
    }
    console.log("guesses remaining: ", guesses);
    console.log(lettersUsed);
    document.getElementById('remaining').innerHTML = guesses;
    document.getElementById('letters').innerHTML = lettersUsed;
  }

  if(guesses === 0){
    alert('Voltorb used Self Destruct');
    alert('You fainted!');
    location.reload();
  }


  if(!problemArr.includes('_') && replaced === false){
    $('#pokeball').remove();
    var answer = $('<img>',{id:'pokemon', src: pokemon[rng].img});
    answer.addClass('pokemon');
    $('#imgContainer').append(answer);
    question.html("It\'s");
    problem.append('!!!');
    replaced = true;
  }
}

$('#reset').on('click', function(){
  alert('You ran away!');
  location.reload();
});
