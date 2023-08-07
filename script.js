function resize(){
document.body.style.height = window.innerHeight + 'px';
document.body.style.width = window.innerWidth + 'px';
}
resize()
window.addEventListener('resize',resize)
var ui = document.querySelector('#userInput')
var uiHolder = document.querySelector('#user')
document.querySelector('body').removeAttribute("formaction");
ui.addEventListener('keydown',function(e){
	var key = e.key.toLowerCase();
  if(key == 'enter'){
  	submitToMrChat(ui.value)
  }
})
function submitToMrChat(thing){
	const chat = document.querySelector("#chats").appendChild(document.createElement('div'))
  chat.id = 'chatBoxForUser'
  chat.innerHTML = thing;
  ui.value = '';
  processStuff(thing)
 }
 function processStuff(thing){
 	//This is where Mr.Chat comes in :)
 }
