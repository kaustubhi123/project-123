img="";
status="";
object=[] ;
function preload() {
    img=loadImage('dog_cat.jpg');
}
function setup() {
canvas= createCanvas(640,240);
canvas.center();
video = createCapteur(VIDEO);
video.size;
objectDetector = ml5.objectDetector( 'cocossd', modelLoaded);
document.getElementById("status").innerHTML= "status : Detecting Objects";
}
function  draw() {
    if (status !="") {

r = random(255);
g = random(255);
b = random(255);

    image(img, video, 0 , 0 , 380 , 380 );
for (i=0 ; i<objects.length; i++)
{document.getElementById("status").innerHTML = "status : object detected";
document.getElementById("number_of_objects").innerHTML = "Number of objects detected are:"+object.length;
fill (r,g,b);
percent= floor (objects[i].confidence * 100);
text(objects[i].label+"" + percent +"%", objects[i].x, objects[i].y);
noFill();
str̥oke(r,g,b);
rect()
}
    }
}
    


function modelLoaded()  {
    console.log("ModelLoaded!")
    status:true;
objectDetector.detect(video , gotResult);
}
function gotResult(error, results) {

    if (error) {
        console.log(error);
    }
    console.log(results);
    object= results;
}
