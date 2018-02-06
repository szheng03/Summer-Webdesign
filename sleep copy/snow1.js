let playNow = function() {
  let audio = new Audio('Digital_alarm_clock_sound_effect_beeping_sounds[Mp3Converter.net].mp3');
  audio.play();
}

setTimeout(function() {
  playNow();
}, 10000);
