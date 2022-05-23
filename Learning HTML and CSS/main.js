function Wtever(){
  document.querySelector("#alert").onclick=hello;
}
function hello(){
  alert("Whats up bro");
}
function wt(){
  var lists=document.querySelectorAll("#night");
  for (i=0;i<lists.length;i++){
    lists[i].onclick=hello;
  }
}
window.onload=wt;

function first(){
  size=600;
  video=document.getElementById("myvideo");
  startbutton=document.getElementById("pause_button");
  bar=document.getElementById("loading_bar");
  progress=document.getElementById("progressbar");

  startbutton.addEventListener("click",playpause,false);
  bar.addEventListener("click",where,false);
}
function playpause(){
  if(!video.paused && !video.ended){
    video.pause();
    startbutton.innerHTML="Play";
    window.clearInterval(updateBar);
  }else{
    video.play();
    startbutton.innerHTML="Pause";
    updateBar=setInterval(update,100);
  }
}
function update(){
  if (!video.ended){
    var Barsize=parseInt(video.currentTime*size/video.duration);
    progress.style.width=Barsize+"px";
  }else{
    progress.style.width="0px";
    startbutton.innerHTML="Play";
    window.clearInterval(updateBar);
  }
}
function where(e){
    if(!video.ended){
    var mouse=e.pageX-bar.offsetLeft;
    var time=mouse*video.duration/size;
    video.currentTime=time;
    progress.style.width=mouse+'px';
  }
}
window.addEventListener("load",first,false);

function draw(){
  var paint= document.getElementById("same");
  canvas=paint.getContext("2d");
  var grad=canvas.createLinearGradient(250,10,370,0);
  grad.addColorStop(0,"rgb(28, 209, 233)");
  grad.addColorStop(.5,"rgb(5, 255, 0)");
  grad.addColorStop(1,"rgb(255, 138, 0)");
  canvas.fillStyle=grad;
  //canvas.fillStyle="rgb(28, 209, 233)";
  canvas.strokeStyle="rgb(255, 94, 94)";
  canvas.strokeRect(10,10,200,100);
  canvas.fillRect(250,10,100,100);
  canvas.clearRect(275,35,50,50);
  canvas.beginPath();
  canvas.moveTo(150,150);
  canvas.lineTo(20,250);
  canvas.lineTo(300,150);
  canvas.closePath();
  canvas.stroke();
  canvas.shadowOffsetX=4;
  canvas.shadowOffsetY=4;
  canvas.shadowBlur=5;
  canvas.shadowColor="rgb(157, 157, 157)";
  canvas.font="bold 36px Paralines";
  canvas.textAlign="end";
  canvas.fillText("Nice",500,100);
  canvas.translate(500,200);
  canvas.fillText("Translate",0,0);
  canvas.rotate(1);
  canvas.fillText("Rotate",125,50);
  canvas.scale(2,2);
  canvas.fillText("Scale",85,75);
  canvas.save();
  canvas.fillStyle="rgb(255, 0, 0)"
  canvas.font="lighter 24px Montserrat Alternates"
  canvas.fillText("Save",0,0);
  canvas.rotate(2);
  canvas.fillText("Rotation",250,0);
  canvas.restore();
  canvas.rotate(-1);
  canvas.font="normal 24px TagType";
  canvas.fillStyle="rgb(198, 87, 241)"
  canvas.fillText("Restore",-100,75);
  var pic=new Image();
  pic.src="/Users/colinlo/Downloads/images.jpeg";
  pic.addEventListener("load",function(){canvas.drawImage(pic,0,-100,71,44.25);},false);
}
  var circle=document.getElementById("good");
window.addEventListener("load",draw,false);
function sketch(){
  var circle=document.getElementById("good");
  drawing=circle.getContext("2d");
  window.addEventListener("click",moving,false);
}
function moving(e){
  drawing.clearRect(0,0,645,500);
  var gradient=drawing.createLinearGradient(0,0,645,500);
  gradient.addColorStop(0,"rgb(255, 39, 0)");
  gradient.addColorStop(0.2,"rgb(242, 255, 0)");
  gradient.addColorStop(0.4,"rgb(0, 194, 255)");
  gradient.addColorStop(0.6,"rgb(92, 0, 255)");
  gradient.addColorStop(0.8,"rgb(173, 255, 0)");
  drawing.fillStyle=gradient;
  var xlocate=e.clientX;
  var ylocate=e.clientY;
  drawing.fillRect(xlocate-150,ylocate-545,200,200);
}
window.addEventListener("load",sketch,false);
/*function done(){
  imag=document.getElementById("different");
  imgg.addEventListener("dragstart",draggging,false);
  here=document.getElementById("Here");
  here.addEventListener("dragenter",function(e){e.preventDefault();},false);
  here.addEventListener("dragover",function(e){e.preventDefault();},false);
  here.addEventListener("drop",droppp,false);
}
function draggging(e){
  var code='<img src="/Users/colinlo/Downloads/photo.jpg" width="150">';
  e.dataTransfer.setData('Text',code);
}
function droppp(e){
  e.preventDefault();
  here.innerHTML=e.dataTransfer.getData('Text');
}
window.addEventListener("load",done,false);*/
//fail
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
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
    rightone.innerHTML+="Username: "+u+"<br> Password: "+me+"<br><br>";
  }
}
window.addEventListener("load",storing,false);
