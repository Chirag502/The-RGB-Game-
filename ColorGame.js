var color1=generateColors(6);
var square=document.querySelectorAll('.box');
var rgbName=document.querySelector('#rgb_name')
var min=0
var max=color1.length;
var pickedcolor=color1[Math.floor(Math.random()*(max-min)+min)]
var res=document.querySelector(".result");
rgbName.innerHTML=pickedcolor


for(var i=0;i<square.length;i++)
{
    square[i].style.backgroundColor=color1[i]
    square[i].addEventListener("click",function () {
        // res.classList.remove(res.className)
        res.classList.add("won")
        var x=this.style.backgroundColor;
       if(x===pickedcolor){
           res.innerHTML="Correct!!";
          changeColors(x)

       }
       else{
        res.innerHTML="Try Again!!";
           this.style.backgroundColor='black'
       }
        
    });
}

function changeColors(x) {
    for(var j=0;j<square.length;j++)
           {
            square[j].style.backgroundColor=x;
           }
           document.querySelector("h1").style.backgroundColor=x
           document.querySelector("h1").style.color="white"
}


function generateColors(num) {
    var arr=[];
    var min=0;
    var max=256;
    for(var i = 0;i<num;i++){
    var r=Math.floor(Math.random()*(max-min)+min),
    g=Math.floor(Math.random()*(max-min)+min),
    b=Math.floor(Math.random()*(max-min)+min);
    var col='rgb('+r+', '+g+', '+b+')';
    console.log(col)
    arr.push(col)
    }
    return arr;
}
