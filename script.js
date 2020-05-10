function changeFunction() {
    document.getElementById("firstline").style="color:purple";
    document.getElementById("firstline").innerHTML="Happy";
    document.getElementById("secondline").style="color:green";
    document.getElementById("secondline").innerHTML="Mother's";
    document.getElementById("wife").innerHTML="Day!";
    showImage();
    delButton();
console.log("I was clicked");

};

function showImage() {
document.getElementById("bestkmom").style.display="block";
document.getElementById("bestkmom").style.zIndex="-10";
}

function delButton() {
    document.getElementById("front-pg-btn").style.display="none";
}
   // var vwife = getElementById("wife");
   // vwife.innerHtml("<p>love</p>")
