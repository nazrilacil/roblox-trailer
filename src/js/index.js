feather.replace();
const trailer = document.getElementById("trailer")
const p = document.getElementById("pause");
const on = document.getElementById("on");

function trigerBtn() {
    if (trailer.paused) {
        trailer.play()
        p.title = "PAUSE";
        p.style.backgroundColor = "black";
        p.innerHTML = '<i data-feather="pause"></i>';
        feather.replace();
    } else {
        trailer.pause()
        p.title = "PLAY";
        p.style.backgroundColor = "red";
        p.innerHTML = '<i data-feather="play"></i>';
        feather.replace();
    }
}
function onBtn() {
    if (trailer.muted) {
        trailer.muted = false;
        on.innerHTML = '<i data-feather="volume-2"></i>'
        feather.replace();
    } else {
        trailer.muted = true;
        on.innerHTML = '<i data-feather="volume-x"></i>'
        feather.replace();
    }
}
function download() {
    window.location.href='https://www.roblox.com/download'
}