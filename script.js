var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
// bubble making part starts.
function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}
//bubble making part ends.


// Timer function
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}


// if we hit the same number as given in hit 10 points should be added into the score part and all the bubbles should refresh along with the hit value.
document.querySelector("#pbtm").addEventListener('click', function (dets) {
 var clickedNumber = Number(dets.target.textContent);
 if(clickedNumber === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
 }
})

runTimer();
makeBubble();
getNewHit();