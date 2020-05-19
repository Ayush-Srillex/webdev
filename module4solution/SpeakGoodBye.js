

(function (window) {
  var byeSpeaker = {};
  //yaakovGreeter.name = "Yaakov";
  var greeting = "Good Bye ";
  byeSpeaker.speak = function (name) {
    console.log(greeting + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
