if (typeof default_interval === "undefined") {
    default_interval = 5000;
}
let interval = default_interval
let curr = 0;
let slides = document.getElementsByClassName("mySlides");
slides[0].style.opacity = 1;  // Start first image as visible

function showSlides() {
    if (slides[curr].classList.contains('video')) {
        let element = slides[curr].querySelector('.videoPlayer');
        element.muted = true;
        element.pause();
        element.currentTime = 0;
    }
    let next = (curr + 1) % slides.length;
    slides[curr].style.opacity = 0;  // Current slide fades out
    slides[next].style.opacity = 1;  // Next slide fades in
    curr = next;
    interval = default_interval
    if (slides[curr].classList.contains('video')) {
        let element = slides[curr].querySelector('.videoPlayer');
        element.muted = false;
        element.play();
        interval = element.duration * 1000;
    }
    setTimeout(showSlides, interval);
}

if (slides[curr].classList.contains('video')) {
    let element = slides[curr].querySelector('.videoPlayer');
    element.muted = false;
    element.play();
    interval = element.duration * 1000;
}
setTimeout(showSlides, interval);