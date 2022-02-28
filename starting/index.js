function starting () {
    var _starting = document.getElementById("starting");
    var positionInfo = _starting.getBoundingClientRect();
    var width = positionInfo.width / 2;
    _starting.style.left = "" + (screen.availWidth / 2) - width + "px";
}
starting();