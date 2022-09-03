Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img id='snap' src='"+data_uri+"'>";
    });
};

function modelLoaded(){};

console.log('ml5 version:', ml5.version);
classify=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Xfqu-ilnX/',modelLoaded);