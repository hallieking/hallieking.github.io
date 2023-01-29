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


// document.addEventListener('DOMContentLoaded', function(e) {

//     var smallH = document.getElementById('small-h');
//     document.addEventListener('scroll', function(e) {
//         let documentHeight = document.body.scrollHeight;
//         let currentScroll = window.scrollY + window.innerHeight;
//         // When the user is [modifier]px from the bottom, fire the event.
//         let modifier = 200; 
//         if(currentScroll + modifier > documentHeight) {
//             console.log('You are at the bottom!')
//             smallH.classList.add('active');
//         }

//         else{
//             smallH.classList.remove('active');
//         }
//     })
// })

