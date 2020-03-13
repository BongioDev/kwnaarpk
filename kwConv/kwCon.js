
var kw = document.querySelector("#kw");
var pk = document.querySelector("#pk");
// var zetOm = document.querySelector("#zetOm");
var reset = document.querySelector("#reset");

 
kw.onkeyup = function zetom (){
  var uitkomst = kw.value * 1.359;
  pk.value = uitkomst;
};

pk.onkeyup =  function zetom (){
  var uitkomst = pk.value * 0.736;
  kw.value = uitkomst;
};

reset.addEventListener("click", function reset (){
   kw.value = null;
   pk.value = null;
});

onkeyup = function(event) {
   if (event.keyCode === 82){
     kw.value = null;
     pk.value = null;
   };
};