
// var tom1 = document.querySelector('.w');
// var tom2 = document.querySelector('.a');
// var tom3 = document.querySelector('.s');
// var tom4 = document.querySelector('.d');
// var snare = document.querySelector('.j');
// var crash = document.querySelector('.k');
// var kick = document.querySelector('.l');



var drums = document.querySelectorAll('.drum');
// console.log(drums)

function checkTheKey(keyValue) {

    switch (keyValue) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log("NOthing matches");
            break;
    }
}

for (let index = 0; index < drums.length; index++) {
    const element = drums[index];

    element.addEventListener('click', function () {

        var innerText = this.innerText;
        checkTheKey(innerText) ;
        makeAnimation(innerText) ;
    })

}


document.addEventListener('keydown' , function(event){
    var key = event.key ;
    // console.log(key) ;
    checkTheKey(key) ;
    makeAnimation(key) ;
})


function makeAnimation(key){

    var keyAnimation = document.querySelector("."+ key) ;
    keyAnimation.classList.add('pressed') ;
    setTimeout(() => {
        keyAnimation.classList.remove('pressed') ;
    }, 100);
}