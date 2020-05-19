
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


console.log(names.length);
for (var i=0;i<names.length;i++) {
  var ch=names[i].charAt(0).toLowerCase();

  if (ch==='j') {
    byeSpeaker.speak(names[i]);
  } else {
    // console.log("Hello "+names[i]);
    helloSpeaker.speak(names[i]);
    // helloSpeaker.xxxx
  }
}
