/* ===== HOME SECTION TYPING ANIMATION ===== */

var typed = new Typed('.auto-input', {
    strings: ['student at FINKI.', "video editor."],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
})


/* ===== GALLERY SECTION IMAGE POP-UP ANIMATION ===== */

var popUp = document.getElementById('pop-up');

var closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', function() {
    popUp.style.display = "none";
});

document.addEventListener('click', function (e) {
    if (e.target.className.indexOf('image') !== -1) {
        var img = e.target;
        var modalImg = document.getElementById("image-content");
        popUp.style.display = "block";
        modalImg.src = img.src;

    }
});
