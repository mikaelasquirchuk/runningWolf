
// Create a variable to store a reference to the img.
var runningWolf = document.querySelector("#runningWolf");
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

runningWolf.style.left = 0;

//Get width as an integer
var currentWidthAsAString = getComputedStyle(runningWolf).width;
var currentWidth = parseInt(currentWidthAsAString, 10);

function wolfRunLTR() {
    //Find current left position
    //Find current left
    var currentLeftAsString = getComputedStyle(runningWolf).left;
    //Convert to integer
    var currentLeft = parseInt(currentLeftAsString,10);
    //Add 10 pixels to make new left
    var newLeft = currentLeft + 10;
    //Assign new left
    runningWolf.style.left = newLeft + "px";
    //Repeat every 10 ms until end of wolfRun
    if (currentLeft < (window.innerWidth - currentWidth) && runningWolf.getAttribute("class") != "turned") {
        window.setTimeout(wolfRunLTR,50);
    } else {
        runningWolf.style.transform = "scaleX(-1)";
        runningWolf.style.webkitTransition = "-webkit-transform 0.1s ease-in";
        runningWolf.setAttribute("class","turned");
        window.setTimeout(wolfRunRTL,50);
    }
}

function wolfRunRTL() {
    //Find current left position
    //Find current left
    var currentLeftAsString = getComputedStyle(runningWolf).left;
    //Convert to integer
    var currentLeft = parseInt(currentLeftAsString,10);
    //Add 10 pixels to make new left
    var newLeft = currentLeft - 10;
    //Assign new left
    runningWolf.style.left = newLeft + "px";
    //Repeat every 10 ms until end of wolfRun
    if (currentLeft > 0  && runningWolf.getAttribute("class") === "turned") {
        window.setTimeout(wolfRunRTL,50);
    } else {
        runningWolf.style.transform = "scaleX(1)";
        runningWolf.style.webkitTransition = "-webkit-transform 0.1s ease-in";
        runningWolf.removeAttribute("class");
        window.setTimeout(wolfRunLTR,50);
    }
}

wolfRunLTR();




var flyingBird = document.querySelector("#flyingBird");

flyingBird.style.right = 0;
flyingBird.style.top = 0;

var currentWidthAsAString = getComputedStyle(flyingBird).width;
var currentWidth = parseInt(currentWidthAsAString, 10);

function birdInFlightRTL() {
    var currentRightAsString = getComputedStyle(flyingBird).right;
    var currentRight = parseInt(currentRightAsString,10);
    var currentTopAsString = getComputedStyle(flyingBird).top;
    var currentTop = parseInt(currentTopAsString,10);
    var newRight = currentRight + 10;
    var newTop = currentTop + 2;
    flyingBird.style.right = newRight + "px";
    flyingBird.style.top = newTop + "px";
    if (currentRight < (window.innerWidth - currentWidth) && currentTop < ((window.innerHeight)/3)) {
        window.setTimeout(birdInFlightRTL,100);
    } else {
        flyingBird.style.webkitTransform = "scaleX(-1)";
        window.setTimeout(birdInFlightLTR,100);
    }
}

function birdInFlightLTR() {
    var currentRightAsString = getComputedStyle(flyingBird).right;
    var currentRight = parseInt(currentRightAsString,10);
    var currentTopAsString = getComputedStyle(flyingBird).top;
    var currentTop = parseInt(currentTopAsString,10);
    var newRight = currentRight - 10;
    var newTop = currentTop - 2;
    flyingBird.style.right = newRight + "px";
    flyingBird.style.top = newTop + "px";
    if (currentRight > 0) {
        window.setTimeout(birdInFlightLTR,100);
    } else {
        flyingBird.style.webkitTransform = "scaleX(1)";
        window.setTimeout(birdInFlightRTL,100);
    }
}


birdInFlightRTL();