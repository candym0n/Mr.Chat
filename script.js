var quetions = ['why', 'who', 'how', 'what', 'whose', 'which']
var greetings = ['hi', 'hello', 'greetings']

function resize() {
  document.body.style.height = window.innerHeight + 'px';
  document.body.style.width = window.innerWidth + 'px';
}
resize()
window.addEventListener('resize', resize)
var ui = document.querySelector('#userInput')
var uiHolder = document.querySelector('#user')
document.querySelector('body').removeAttribute("formaction");
ui.addEventListener('keydown', function(e) {
  var key = e.key.toLowerCase();
  if (key == 'enter') {
    submitToMrChat(ui.value)
  }
})

function submitToMrChat(thing) {
  const chat = document.querySelector("#chats").appendChild(document.createElement('div'))
  chat.id = 'chatBoxForUser'
  chat.innerHTML = thing;
  ui.value = '';
  processStuff(thing.toLowerCase())
}

function processStuff(thing) {
  thing = thing.split(' ')
  if (include(thing, greetings)) {
    say("Hello")
  }
  if (include(thing, quetions) || getLastLetter(thing) == '?' || thing[0] == 'are' && thing.length != 1 || thing[0] == 'is' && thing.length != 1 || thing[0] == 'will' && thing.length != 1 || thing[0] == 'can' && thing.length != 1) {
    var i = Math.round(Math.random());
    if (i == 0) {
      say("I do not know")
    }
    if (i == 1) {
      say("Try thinking yourself")
    }
  }
  if (include(thing, ['stop','stop!','stop.'])) {
    say("I will continue, it is my own choice.")
  }
  if(getLastLetter(thing) == '!' && !include(thing,'stop!')){
  var i = Math.round(Math.random());
  if(i==0){
  	say('Very exited, I see.')
    }
    if(i==1){
    	say('Why?')
    }
  }
  if(wordIs(thing,'yes') || wordIs(thing,'nope') || wordIs(thing,'no')){
  	say('How come?')
  }
  if(thing.length == 1 && thing[0] == 'because'){
  	say('Because.....what?')
  }
}

function say(thing) {
  const chat = document.querySelector("#chats").appendChild(document.createElement('div'));
  setTimeout(function(){
  chat.id = 'chatBoxForMrChat'
  chat.innerHTML = thing;
  },0)
}

function include(array, thing) {
  for (let i = 0; i < array.length; i++) {
    for (let a = 0; a < thing.length; a++) {
      if (array[i] == thing[a] || array[i]+'!' == thing[a]) {
        return true;
      }
    }
  }

}

function getFirstLetter(thing) {
  return thing[0][0]
}

function getLastLetter(thing) {
  const word = thing[thing.length - 1]
  const wordLength = word.length;
  return word.charAt(wordLength - 1)
}
function wordIs(thing,a){
	if(thing.length == 1 && thing[0] == a){
  	return true;
  }
}
