x=0 ;
y=0 ;
draw_circle="" ;
draw_rectangle = "" ;
var speechrecogition = window.webkitSpeechRecognition ;
var recognition = new speechrecogition() ;

function setup(){
canvas=createCanvas(900,600) ;

}
function draw() {
    if (draw_circle=="set") {
        circle(x,y,100) ;
        document.getElementById("status") .innerHTML="The Circle Is Drawn" ;
        draw_circle="" ;
    }

    if (draw_rectangle=="set") {
        rect(x,y,70,50) ;
        document.getElementById("status") .innerHTML="The Rectangle Is Drawn" ;
        draw_rectangle="" ;
    }
}

function start() {
    document.getElementById("status") .innerHTML = "System Is Listening ... please speak " ;
    recognition.start() ;
}

recognition.onresult = function(event) {
    console.log(event) ;
    content = event.results[0][0].transcript ;
    document.getElementById("status") .innerHTML = "The speech has been recognized as " +content ;
    if (content == "Circle.") {
        x=Math.floor(Math.random()*900) ;
        y=Math.floor(Math.random()*600) ;
        document.getElementById("status") .innerHTML = "Started Drawing Circle" ;
        draw_circle = "set" ;

    }

    if (content == "Rectangle.") {
        x=Math.floor(Math.random()*900) ;
        y=Math.floor(Math.random()*600) ;
        document.getElementById("status") .innerHTML = "Started Drawing Rectangle" ;
        draw_rectangle = "set" ;

    }
}
