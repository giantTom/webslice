  function myfunction(){
   var a = document.getElementById("textinput").value;
    var i = 1;
  // document.getElementById("output1").innerHTML = a10;

    function scroll(){
      var b = a.slice(0,i); 
        i++;
        if(i>a.length){
          i = 0;
       }
      document.getElementById("output1").innerHTML = b;
    }
  timer = setInterval(scroll,300);
  document.getElementById("buttonstart").disabled = true;
  }
function mystop(){
   clearInterval(timer);
}