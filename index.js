const rollbtn = document.getElementById("roll-btn");

rollbtn.onclick = function() {
    let randomNum1 = Math.floor(Math.random()*6 + 1)
    let randomNum2 = Math.floor(Math.random()*6 + 1)

    const randomDice1 = "dice"+randomNum1+".png";
    const randomDice2 = "dice"+randomNum2+".png";

    const randomImageSource1 = randomDice1;
    const randomImageSource2 = randomDice2;

    const image1 = document.querySelectorAll("img")[0];
    const image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src",randomImageSource1);
    image2.setAttribute("src",randomImageSource2);

}
