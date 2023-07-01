/* ===== HOME SECTION TYPING ANIMATION ===== */

var typed = new Typed('.auto-input', {
    strings: ['student at FINKI.', "Front-End Developer.", "Video Editor."],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
})


/* ===== GALLERY SECTION IMAGE POP-UP ANIMATION ===== */

var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() {
    modal.style.display = "none";
});

document.addEventListener('click', function (e) {
    if (e.target.className.indexOf('modal-target') !== -1) {
        var img = e.target;
        var modalImg = document.getElementById("modal-content");
        var captionText = document.getElementById("modal-caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
});
