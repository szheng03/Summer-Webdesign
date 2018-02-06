function showThoughts() { 
    document.getElementById("Thoughts").style.display = "inline"; 
}


setTimeout("showThoughts()", 13000);


let playNow = function() {
  let audio = new Audio('Turning in Bed Sound Effect1.mp3');
  audio.play();
}

setTimeout(function() {
  playNow();
}, 0);
