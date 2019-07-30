for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
  var letter = this.innerHTML;
    verify(letter);
  });
}
function verify(letter){
  switch(letter) {
    case "w":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    buttonAnimation(letter);
      break;
    case "a":
    var audio1 = new Audio('sounds/kick-bass.mp3');
    audio1.play();
    buttonAnimation(letter)
      break;
    case "s":
    var audio2 = new Audio('sounds/snare.mp3');
    audio2.play();
    buttonAnimation(letter)
      break;
    case "d":
    var audio3 = new Audio('sounds/tom-1.mp3');
    audio3.play();
    buttonAnimation(letter)
      break;
    case "j":
    var audio4 = new Audio('sounds/tom-2.mp3');
    audio4.play();
    buttonAnimation(letter)
      break;
    case "k":
    var audio5 = new Audio('sounds/tom-3.mp3');
    audio5.play();
    buttonAnimation(letter)
      break;
    case "l":
    var audio6 = new Audio('sounds/tom-4.mp3');
    audio6.play();
    buttonAnimation(letter)

      break;
    default: console.log(letter);

  }
}
document.addEventListener("keydown", function(e){
  var letter = e.key;
  verify(letter);
});

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);



}
