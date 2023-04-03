var mouseX;
var mouseY;

function clickYes(){
    document.getElementById("congrats").style.display = "block";
    document.getElementById("cat2").classList.add('dancing');
    setTimeout(()=> {document.getElementById("cat1").classList.add('dancing');}, 500);
    setTimeout(()=> {document.getElementById("cat3").classList.add('dancing');}, 1000);
    setTimeout(()=> {document.getElementById("cat4").classList.add('dancing');}, 1500);
    var screech = new Audio('Photos/Screech.mp3');
    screech.volume = 0.1;
    screech.play();
    setTimeout(()=>{
        var clap = new Audio('Photos/Clap.mp3');
        clap.volume = 0.5;
        clap.play();
        setTimeout(()=>{
            var yipee = new Audio('Photos/Yipee.mp3')
            yipee.volume = 0.5;
            yipee.play();
            screech.pause();
            setTimeout(meowForever, 3000);
        }, 1000);
        party.confetti(document.body, {
            count: party.variation.range(80, 100),
        });
    }, 5000);
}

function meowForever(){
    var meowSound = new Audio('Photos/Meow.wav');
    meowSound.volume = 0.2;
    meowSound.playbackRate = Math.random() + 0.5;
    meowSound.play();
    setTimeout(meowForever, Math.floor(Math.random() * 5000) + 1000);
}

function clickNo(){
    //Raise shooters
    document.getElementById("shooters").style.display = "grid";
    document.getElementById("warning").hidden = false;
    document.getElementById("warning").classList.add('show_warning');
    let alarmSound = new Audio('Photos/Alarm.mp3');
    alarmSound.volume = 0.3;
    alarmSound.play();
    var trackGunshots = [];
    setTimeout(()=>{
        document.getElementById("shooter2").classList.add('raise_shooters');
        setTimeout(()=> {document.getElementById("shooter1").classList.add('raise_shooters');}, 100);
        setTimeout(()=> {document.getElementById("shooter3").classList.add('raise_shooters');}, 200);
        setTimeout(()=> {document.getElementById("shooter4").classList.add('raise_shooters');}, 300);
        //"Shoot 10 bullets"
        setTimeout(()=> {
            //Make them shake
            document.getElementById("shooter1").classList.add('raised_shooter');
            document.getElementById("shooter2").classList.add('raised_shooter');
            document.getElementById("shooter3").classList.add('raised_shooter');
            document.getElementById("shooter4").classList.add('raised_shooter');
            for(var i = 0; i < 50; i++){
                setTimeout(()=> {
                    var newGlassBreak = document.createElement("img");
                    newGlassBreak.src = "Photos/broken_glass.png"
                    newGlassBreak.classList.add('gunshot');
                    newGlassBreak.style.position = "fixed";
                    console.log("E: " + mouseX + ",  " + mouseY);
                    newGlassBreak.style.bottom = ((window.innerHeight - mouseY) - 75) + "px"; //Offset 75px for image height to center
                    newGlassBreak.style.left = (mouseX - 75) + "px"; //Offset 75px for image width to center
                    var glassRotation = Math.floor(Math.random() * 359);
                    newGlassBreak.style.transform= "rotate(" + glassRotation + "deg)";
                    document.body.appendChild(newGlassBreak);
                    trackGunshots.push(newGlassBreak); //Track to remove later
                    let gunshotSound = new Audio('Photos/Gunshot.mp3');
                    gunshotSound.volume = 0.2;
                    gunshotSound.play()
                }, i * 100);
            }
        }, 1400);
        setTimeout(()=> {
            document.getElementById("shooter1").classList.remove('raised_shooter');
            document.getElementById("shooter2").classList.remove('raised_shooter');
            document.getElementById("shooter3").classList.remove('raised_shooter');
            document.getElementById("shooter4").classList.remove('raised_shooter');
            document.getElementById("shooter2").classList.remove('raise_shooters');
            setTimeout(()=> {document.getElementById("shooter1").classList.remove('raise_shooters');}, 100);
            setTimeout(()=> {document.getElementById("shooter3").classList.remove('raise_shooters');}, 200);
            setTimeout(()=> {document.getElementById("shooter4").classList.remove('raise_shooters');}, 300);
            setTimeout(()=> {document.getElementById("warning").classList.remove('show_warning');}, 300);
            setTimeout(()=> {alarmSound.pause();}, 1200);
            //Clean up all images once the last one fades
            setTimeout(()=> {for(var j = 0; j < trackGunshots.length; j++){
                                    document.body.removeChild(trackGunshots[j]);
                                }
                             document.getElementById("warning").hidden = true;
                             document.getElementById("shooters").style.display = "none";
                            }, 4000);
        }, 6400);
    }, 1500);
}

addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});
