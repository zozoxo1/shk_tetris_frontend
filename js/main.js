// lagesensor muss aktiviert sein

function myEvent(event)
{

    let beta = event.beta;
    let gamma = event.gamma;

    resetButtons();

    if(gamma < -20) {
        // links
        if(!document.getElementsByClassName("left")[0].classList.contains("selected"))
        {
            document.getElementsByClassName("left")[0].classList.add("selected")
        }
    }

    if(gamma > 20) {
        // rechts
        if(!document.getElementsByClassName("right")[0].classList.contains("selected"))
        {
            document.getElementsByClassName("right")[0].classList.add("selected")
        }
    }

    if(beta > 40)
    {
        // nach unten
        if(!document.getElementsByClassName("horizontal-bottom")[0].classList.contains("selected"))
        {
            document.getElementsByClassName("horizontal-bottom")[0].classList.add("selected")
        }
    }

    if(beta < 0)
    {
        // nach oben

        if(!document.getElementsByClassName("horizontal-top")[0].classList.contains("selected"))
        {
            document.getElementsByClassName("horizontal-top")[0].classList.add("selected")
        }
    }
}

function resetButtons() {
    document.getElementsByClassName("left")[0].classList.remove("selected");
    document.getElementsByClassName("right")[0].classList.remove("selected");
    document.getElementsByClassName("horizontal-top")[0].classList.remove("selected");
    document.getElementsByClassName("horizontal-bottom")[0].classList.remove("selected");
}

function requestOrientationPermission(){
    window.DeviceOrientationEvent.requestPermission()
    .then(response => {
        if (response == 'granted') {
            alert("DeviceOrientation is now enabled!");
            window.addEventListener('deviceorientation', event => myEvent(event))
        }
    })
    .catch(console.error)
}

window.addEventListener('deviceorientation', event => myEvent(event))

window.onload = function() {
    if ( window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function' ) {
        document.getElementById("calibrate").addEventListener('click', requestOrientationPermission);
    } else {
        document.getElementById("calibrate").addEventListener('click', event => {
            alert("DeviceOrientation is not supported by your browser");
        });
    }
}