let itext = document.getElementById("text");
let n= itext.value;
let res = document.getElementById("result");


document.getElementById("check").addEventListener("click", function () {
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


