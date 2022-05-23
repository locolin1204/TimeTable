function storing(){
  var save=document.getElementById("pressing");
  save.addEventListener("click",savething,false);
  display();
}
function savething(){
  var name=document.getElementById("name").value;
  var pw=document.getElementById("pw").value;
  sessionStorage.setItem(name,pw);
  display();
  document.getElementById("name").value="";
  document.getElementById("pw").value="";
}
function display(){
  var rightone=document.getElementById("right");
  /*var got =sessionStorage.getItem(name);
  rightone.innerHTML="Username: "+name+"<br> Password: "+got;*/
  rightone.innerHTML="";
  for(var x=0;x<sessionStorage.length;x++){
    var u=sessionStorage.key(x);
    var me=sessionStorage.getItem(u);
    rightone.innerHTML+="Password: "+me+"<br><br>";
  }
}

function urIQ(){
  alert("Your IQ is "+x+);
  alert(y);
}
window.addEventListener("load",storing,false);
//var troll=prompt("Your web browser just got hacked by Wannacry enter your security code to prevent your computer becoming inflected");
