var n = 3;
var pickedcolor="hello";
var square=0;
var color1 = generateColors(n);
var res = document.querySelector(".result");
var easyClicked = true;
var level2 = document.getElementById("level2")
var p = level2.getElementsByTagName("div");
var easy = document.querySelector(".easy");
level2.style.display = "none";
easy.classList.add("bgcolor")
var hard = document.querySelector(".hard");
generateSquare(color1);



hard.addEventListener("click", function () {
    if (easyClicked) {
        easy.classList.remove("bgcolor")
        document.querySelector("h1").style.backgroundColor = "dimgray";
        document.querySelector("h1").style.color = "chartreuse"
        hard.classList.add("bgcolor")
        level2.style.display = "flex";
        res.innerHTML="";
        console.log("hard level selected"+ 3)
        for (var index = 0; index < p.length; index++) 
            p[index].classList.add("box");
        easyClicked = false
        n = 6;
        color1 = generateColors(n);
        generateSquare(color1);
    }
})

easy.addEventListener("click", function () {
    if (!easyClicked) {
        document.querySelector("h1").style.backgroundColor = "dimgray";
        document.querySelector("h1").style.color = "chartreuse"
        res.innerHTML="";
        hard.classList.remove("bgcolor")
        easy.classList.add("bgcolor")
        level2.style.display = "none";
        easyClicked = true
        n = 3;
        color1 = generateColors(n);
        for (var index = 0; index < p.length; index++) {
            p[index].classList.remove("box");
        }
        generateSquare(color1);
    }
})

function generateSquare(color) {
    var t = document.querySelectorAll('.box');
    square=t;
    console.log("no.of squares"+square.length)
    var rgbName = document.querySelector('#rgb_name')
    var min = 0
    var max = t.length;
   console.log("max: "+max)
    var random=Math.floor(Math.random() * (max - min) + min);
    console.log("random: "+random);
    pickedcolor = color[random];
    rgbName.innerHTML = pickedcolor
    console.log("picked color: "+pickedcolor)

    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color[i]
        console.log("hello");
        square[i].addEventListener("click", clicking);
    }
}

function clicking () {
    var x = this.style.backgroundColor;
    if (x == pickedcolor) {
        res.innerHTML = "Correct!!";
        changeColors(x,square);
    }
    else {
        res.innerHTML = "try Again !!";
        this.style.backgroundColor = 'black';
    }

}
function changeColors(x,square) {
    for (var j = 0; j < square.length; j++) {
        square[j].style.backgroundColor = x;
    }
    document.querySelector("h1").style.backgroundColor = x
    document.querySelector("h1").style.color = "white"
}


function generateColors(num) {
    var arr = [];
    var min = 0;
    var max = 256;
    for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * (max - min) + min),
            g = Math.floor(Math.random() * (max - min) + min),
            b = Math.floor(Math.random() * (max - min) + min);
        var col = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        console.log(col)
        arr.push(col)
    }
    return arr;
}

