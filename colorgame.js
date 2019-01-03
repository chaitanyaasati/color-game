//var color=["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 255)"];
var color = generaterandomcolor(6); 
var square=document.querySelectorAll(".square");
var pickedcolor = color[pickcolor()];
var colordisplay = document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var heading = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
easy.addEventListener("click",function()
{
   heading.style.backgroundColor="steelblue";
   hard.classList.remove("selected");
   easy.classList.add("selected");
   color = generaterandomcolor(3); 
   pickedcolor = color[pickcolor()];
   colordisplay.textContent = pickedcolor;
   for(var i=0;i<square.length;i++)
   {
   	  if(color[i])
   	  square[i].style.backgroundColor = color[i];
      else
      square[i].style.display="none";	
   }
   reset.textContent="New Colors";

});

hard.addEventListener("click",function()
{
   heading.style.backgroundColor="steelblue";
   easy.classList.remove("selected");
   hard.classList.add("selected");
   color = generaterandomcolor(6); 
   pickedcolor = color[pickcolor()];
   colordisplay.textContent = pickedcolor;
   for(var i=0;i<square.length;i++)
   {
   	  square[i].style.backgroundColor = color[i];
      square[i].style.display="block";	
   }
   reset.textContent="New Colors"
});

reset.addEventListener("click",function()
{
  heading.style.backgroundColor="steelblue";
  color=generaterandomcolor(6);
  pickedcolor = color[pickcolor()];
  colordisplay.textContent = pickedcolor;
  for(var i=0; i < square.length;i++)
{
	square[i].style.backgroundColor = color[i];
	square[i].style.display="block";	
}
reset.textContent="New Colors"
});

colordisplay.textContent = pickedcolor;
setcolors();


function setcolors()
{
	for(var i=0; i < square.length;i++)
{
	square[i].style.backgroundColor = color[i];
	square[i].addEventListener("click", function(){
         var clickedcolor = this.style.backgroundColor;
         if(clickedcolor === pickedcolor)
         {
         	messagedisplay.textContent="Correct";
         	changecolors(clickedcolor);
         	heading.style.backgroundColor=clickedcolor;
         	reset.textContent="Play Again";
         }
         else
         {
         	this.style.backgroundColor="steelblue";
         	messagedisplay.textContent="Try Again";
         }

         });    	
}
}

function changecolors(color)
{
    for(var i=0; i < square.length;i++)
    {
    	square[i].style.backgroundColor=color;
    }   
}

function generaterandomcolor(num)
{
    var arr = [];
    for(var i=0; i<num;i++)
    {
         arr[i]=randomcolor();
    }
    return arr;
}

function pickcolor()
{
	var x = Math.floor(Math.random()*color.length);
    return x; 
}

function randomcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
    return "rgb(" +r+ ", " +g+", "+b+")";
}