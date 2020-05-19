
(function (window) {
  var helloSpeaker = {};
  //yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  helloSpeaker.speak = function (name) {
    console.log(greeting + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
