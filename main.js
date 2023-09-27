var mouseEvent="empty";
var las_position_of_x,las_position_of_y;
canvas =document.getElementById("micanvas");
ctx=canvas.getContext("2d");
color="black";
 width_of_line=1;
 var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height -300;
           if(width < 992)
{
document.getElementById("micanvas").width=new_width;
document.getElementById("micanvas").width=new_width;

}
canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart (e)

{
   lastx =e.touches[0].clientX - canvas.offsetLeft;
   lasty=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove (e)
{
    currentX =e.touches[0].clientX - canvas.offsetLeft;
    currenty =e.touches[0].clientY - canvas.offsetTop;
     
        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.lineWidht=width_of_line;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentX,currenty);
        ctx.stroke();
     
        lastx =currentX;
        lasty =currenty;

}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup (e)
{mouseEvent ="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave (e)
{mouseEvent ="mouseleave";}
