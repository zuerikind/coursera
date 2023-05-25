
(function (window) {
  var byeSpeaker ={};
  var x;
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (x){
    console.log(speakWord + " " + x);
  }

  window.byeSpeaker = byeSpeaker
})(window);