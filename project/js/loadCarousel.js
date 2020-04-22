let index = 0;
showSlide(index);

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let slideChangers = document.getElementsByClassName("slide-changer");

    for(let i = 0; i < slides.length; i ++) {
        slides[i].style.display = "none";
    }

    for(let i = 0; i < slides.length; i ++) {
        slideChangers[i].className =  slideChangers[i].className.replace(" active", "");
    }

    index = n - 1;
    if((index) < 0){index = 0};
    slides[index].style.display = "block";
    slideChangers[index].className+= " active";
  
}

