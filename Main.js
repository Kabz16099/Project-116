var lip_x= 0;
var lip_y= 0;
function preload() {
  var moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  console.log(results);
  if(results.length > 0)
  {
    console.log(results);
    console.log("lip x = " + results[0].pose.lip.x);
    console.log("lip y = " + results[0].pose.lip.y);
  console.log(results[0].pose.leftEye.x);
  console.log(results[0].pose.leftEye.y);
    }
    
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill("black");
  stroke("black");
  //circle(lip_x, lip_y, 32.5);
  image(moustache, nose_x, nose_y, 30, 30);
  
}


function take_snapshot(){    
  save('myFilterImage.png');
}
