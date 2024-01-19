var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber)

var url1 = "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", url1);




var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var url2 = "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", url2);




if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win...";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Win...";
}else{
    document.querySelector("h1").innerHTML = "I'ts Draw...";
}