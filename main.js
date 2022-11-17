var wantedcolor2;
window.onload = function() {
    
    var wantedcolor1 = Math.floor(Math.random() * 10);
    
    
    switch(wantedcolor1) {
        case 1: wantedcolor2 = "blue"; document.getElementById('renkkutu').style.backgroundColor = "blue";
        break;
        case 2: wantedcolor2 = "red";  document.getElementById('renkkutu').style.backgroundColor = "red";
        break;
        case 3: wantedcolor2 = "green";  document.getElementById('renkkutu').style.backgroundColor = "green";
        break;
        case 4: wantedcolor2 = "black";  document.getElementById('renkkutu').style.backgroundColor = "black";
        break;
        case 5: wantedcolor2 = "purple";  document.getElementById('renkkutu').style.backgroundColor = "purple";
        break;
        case 6: wantedcolor2 = "pink";  document.getElementById('renkkutu').style.backgroundColor = "pink";
        break;
        case 7: wantedcolor2 = "whitesmoke";  document.getElementById('renkkutu').style.backgroundColor = "whitesmoke";
        break;
        case 8: wantedcolor2 = "lightblue";  document.getElementById('renkkutu').style.backgroundColor = "lightblue";
        break;
        case 9: wantedcolor2 = "yellow";  document.getElementById('renkkutu').style.backgroundColor = "yellow";
        break;
        case 0: wantedcolor2 = "brown";  document.getElementById('renkkutu').style.backgroundColor = "brown";
        break;
       }
      console.log(wantedcolor2)
}







function Start() {

  setInterval(function() {
  
   var randomcolor = Math.floor(Math.random() * 10);
 
   
   switch(randomcolor) {
    case 1: document.getElementById('top').style.backgroundColor = "red"
    break;
    case 2:document.getElementById('top').style.backgroundColor = "blue"
    break;
    case 3:document.getElementById('top').style.backgroundColor = "green"
    break;
    case 4:document.getElementById('top').style.backgroundColor = "black"
    break;
    case 5:document.getElementById('top').style.backgroundColor = "purple"
    break;
    case 6:document.getElementById('top').style.backgroundColor = "pink"
    break;
    case 7:document.getElementById('top').style.backgroundColor = "whitesmoke"
    break;
    case 8:document.getElementById('top').style.backgroundColor = "lightblue"
    break;
    case 9:document.getElementById('top').style.backgroundColor = "yellow"
    break;
    case 0:document.getElementById('top').style.backgroundColor = "brown"
    break;
   }
   
  
  
   
  },800)



}
var skor = 0;  
function Catch() {
   
    

    if(document.getElementById('top').style.backgroundColor == wantedcolor2) {
      
        skor++;
        document.getElementById('skor').innerHTML = parseInt(skor);
        
        
    }
    else {
        skor--;
        document.getElementById('skor').innerHTML = parseInt(skor);
       
    }
 
   




}
//Random position
setInterval(function() {
    
    var randomtop = Math.floor(Math.random() * 300);
    var randombot = Math.floor(Math.random() * 300);
    var randomleft = Math.floor(Math.random() * 300);
    var randomright = Math.floor(Math.random() * 300);
    document.getElementById('top').style.marginTop = randomtop + "px";
    document.getElementById('top').style.marginBottom = randombot + "px";
    document.getElementById('top').style.marginLeft = randomleft + "px";
    document.getElementById('top').style.marginRight = randomright + "px";
    

},800)

Start();
