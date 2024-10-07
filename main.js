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

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";

});

