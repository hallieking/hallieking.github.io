// const exit = document.querySelector(".exit-btn");
// const carousel = document.querySelector(".carousel");

// let images = document.querySelectorAll(".image");

// exit.addEventListener('click', () => {
//     carousel.style.display = 'none';
// });

// for (let i = 0; i < images.length; i++){
//     images[i].addEventListener('click', () =>{
//         carousel.style.display = 'block';
//     });
// }

window.addEventListener('scroll', appear);

function appear(){
    var appears = document.querySelectorAll('.appear');

    for(var i = 0; i < appears.length; i++){

        var windowHeight = window.innerHeight;
        var appearTop = appears[i].getBoundingClientRect().top;
        var appearPoint = 150;

        if(appearTop < windowHeight - appearPoint){
            appears[i].classList.add('active');
        }
        else{
            appears[i].classList.remove('active');
        }
    }
}
