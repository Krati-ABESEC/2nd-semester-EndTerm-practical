let itext = document.getElementById("text");
let res = document.getElementById("result");


document.getElementById("check").addEventListener("click", function () {
    let n= itext.value;
    if (n % 2 === 0) {
        res.innerHTML = "The number is Even";
    } else {
        res.innerHTML= "The number is Odd";
    }
});

document.getElementById("reset").addEventListener("click", function () {
    res.innerHTML="";
    itext.value=0;
});


