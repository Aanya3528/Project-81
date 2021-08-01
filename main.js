canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 0.5;
ctx.rect(210,125,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(320, 200, 40 ,0 ,(2*Math.PI));
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(420, 200, 40 ,0 ,(2*Math.PI));
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(520, 200, 40 ,0 ,(2*Math.PI));
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(370, 250, 40 ,0 ,(2*Math.PI));
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4   ;
ctx.arc(470, 250, 40 ,0 ,(2*Math.PI));
ctx.stroke();
