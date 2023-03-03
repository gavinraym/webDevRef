
function start() {
    console.log("Start");

    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = 'position:absolute;width:50%;height:50%;opacity:0.3;z-index:100;background:#000;';
    document.body.appendChild(elemDiv);

    // var car = document.getElementById("car-img");
    elemDiv.appendChild(car);

}

