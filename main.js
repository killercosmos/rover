canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_y = 10;
rover_x = 10;

var background_image = "mars.jpg";

var rover_image = "rover.png";
function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
    {
        ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
    }

 
function  uploadrover()
{
    ctx.drawImage(rover_img,0,0,canvas.width,canvas.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keycode;

    if(keypressed == 0)
    {
        up()
        console.log("up");
    }
    if(keypressed == 40)
    {
        down()
        console.log("down");
    }
    if(keypressed == 37)
    {
        left()
        console.log("left");
    }
    if(keypressed == 39)
    {
        right()
        console.log("right");
    }
}

function up()
{
    if(rover_y >= 0);
    {
        rover_y = rover_y - 10;
        uploadBackground()
        uploadrover()
    }
}

function down()
{
    if(rover_y <= 500)
    {
        rover_y = rover_y - 10;
        uploadBackground()
        uploadrover()
    }
}

function left()
{
    if(rover_x >= 0 )
    {
        rover_x = rover_x + 10;
        uploadBackground()
        uploadrover()
    }
}
function right()
{
    if(rover_x <= 700)
    {
        rover_x = rover_x +10;
        uploadBackground()
        uploadrover()
    }
}


