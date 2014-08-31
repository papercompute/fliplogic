function move(e,i,l,t){
  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100*l)+"%";  e.style.top = (etop+100*t)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
}

function move1(e,i,l,t){
  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;
  e.style.left = (oleft+100*l)+"%";  e.style.top = (otop+100*t)+"%";
}

function move2(e,i,l,t){
  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
  e.style.left = (eleft+100*l)+"%";  e.style.top = (etop+100*t)+"%"; 
}

var game={
l : [
{ // L0
cb:function(e){
//console.log("L0 cb",e);
},
b:[ 
 [0,0,"red"],
 [1,1,"gray",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,-1,"blue",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,1,"green",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [1,-1,"orange",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
],
},
{ // L1
b:[
 [0,0,"black"],
 [1,1,"gray"],
 [-1,-1,"blue"],
 [-1,1,"gray"],
 [1,-1,"blue"],
 [-2,-2,"orange",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-2,2,"orange",function(e){ 
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [2,-2,"orange"],
 [2,2,"orange",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
]
},
{// L2
c:0,
scale:0.09,
cb:function(e){
//console.log("L2 cb");

var boxes=document.querySelectorAll(".gamebox");

switch(game.l[game.i].c%3){
case 0:
for(var i=0;i<=10;i+=5){
move1(boxes[i+0],i+0,0,4); 
move1(boxes[i+1],i+1,0,2);

move1(boxes[i+3],i+3,0,-2); 
move1(boxes[i+4],i+4,0,-4);
}
break;
case 1:
for(var i=0;i<=10;i+=5){
move1(boxes[i+0],i+0,0,2); 
move1(boxes[i+1],i+1,0,1);

move1(boxes[i+3],i+3,0,-1); 
move1(boxes[i+4],i+4,0,-2);
}
break;
case 2:
for(var i=0;i<=10;i+=5){
move1(boxes[i+0],i+0,0,0); 
move1(boxes[i+1],i+1,0,0);

move1(boxes[i+3],i+3,0,0); 
move1(boxes[i+4],i+4,0,0);
}
break;
}

game.l[game.i].c=game.l[game.i].c+1;
},
gen:function(l){
//console.log("L2 gen",l);
if(game.l[l].b.length>1){return;}

for(var i=-2;i<=2;i+=1){
 game.l[l].b.push([i,i-2,"lightgrey"]);
}


for(var i=-2;i<=2;i+=1){
 game.l[l].b.push([i,i,"orange"]);
}

for(var i=-2;i<=2;i+=1){
 game.l[l].b.push([i,i+2,"red"]);
}

game.l[l].c=0;
},
b:[]
},
{// L3
cb:function(e){
//console.log("L3 cb");

var boxes=document.querySelectorAll(".gamebox");

for(var i=0;i<=3;i+=1){
move(boxes[i],i,0,1); 
}
for(var i=8;i<=11;i+=1){
move(boxes[i],i,0,1); 
}
for(var i=16;i<=19;i+=1){
move(boxes[i],i,0,1); 
}


},
gen:function(l){
//console.log("L3 gen",l);
if(game.l[l].b.length>0){return;}
for(var i=-3;i<=3;i+=2){
 game.l[l].b.push([-2,i,"orange"]);
}
for(var i=-3;i<=3;i+=2){
 game.l[l].b.push([-1,i,"orange"]);
}
for(var i=-3;i<=3;i+=2){
 game.l[l].b.push([0,i,"lightgray"]);
}
for(var i=-3;i<=3;i+=2){
 game.l[l].b.push([1,i,"orange"]);
}
for(var i=-3;i<=3;i+=2){
 game.l[l].b.push([2,i,"orange"]);
}
},
b:[]
},
{// L4
c:0,
gen:function(l){
game.l[l].c=0;
},
cb:function(e){
//console.log("L4 cb");

var boxes=document.querySelectorAll(".gamebox");


if(game.l[game.i].c%2 == 0){
for(var i=0;i<=4;i+=1){
move(boxes[i],i,0,1); 
}
}
else
{
for(var i=0;i<=4;i+=1){
move(boxes[i+5],i+5,0,-1); 
}
}

game.l[game.i].c=game.l[game.i].c+1;


},

b:[ 
 [-2,-2,"red"],
 [-1,-1,"red"],
 [ 0, 0,"red"],
 [ 1,-1,"red"],
 [ 2,-2,"red"],

 [-2, 1,"red"],
 [-1, 2,"red"],
 [ 0, 3,"red"],
 [ 1, 2,"red"],
 [ 2, 1,"red"],

 [-3,-1,"lightgray"],
 [-3, 0,"lightgray"],

 [ 3,-1,"lightgray"],
 [ 3, 0,"lightgray"],

]
},
{// L5
scale:0.1,
b:[ 
 [-3,-3,"lightgray"],
 [-2,-3,"lightgray"],
 [-1,-3,"lightgray"],

 [-3,-2,"lightgray"],
 [-1,-2,"lightgray"],
 [-4,-2,"red"],

 [-3,-1,"lightgray"],
 [-2,-1,"lightgray"],
 [-1,-1,"lightgray"],

 [-3, 0,"lightgray"],
 [-2, 0,"lightgray"],
 [-1, 0,"lightgray"],
 [ 0, 0,"lightgray"],


 [-3, 1,"lightgray"],
 [-2, 1,"lightgray"],
 [-1, 1,"lightgray"],
 [ 0, 1,"lightgray"],
 [ 1, 1,"lightgray"],
 [ 2, 1,"lightgray"],
 [ 3, 1,"lightgray"],

 [-3, 2,"lightgray"],
 [-2, 2,"lightgray"],
 [-1, 2,"lightgray"],
 [ 0, 2,"lightgray"],
 [ 1, 2,"lightgray"],
 [ 2, 2,"lightgray"],


 [-3, 3,"lightgray"],
 [-2, 3,"lightgray"],
 [-1, 3,"lightgray"],
 [ 0, 3,"lightgray"],
// [ 1, 3,"black"],

 [ -2, 4,"lightgray"],

]
},
{// L6
scale:0.1,
b:[ 
 [-1,-4,"lightgray"],
 [-3,-3,"red",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-2,-3,"lightgray"],
 [-1,-3,"lightgray"],
 [ 0,-3,"lightgray"],

 [-3,-2,"lightgray"],
 [-2,-2,"lightgray"],
 [-1,-2,"lightgray"],

 [-1,-1,"lightgray"],
 [ 0,-1,"lightgray"],
 [ 1,-1,"lightgray"],
 [ 2,-1,"lightgray"],
 [ 3,-1,"lightgray"],
 [ 4,-2,"lightgray"],
 //[ 4,-1,"black"],

 [-1, 0,"lightgray"],
 [ 0, 0,"lightgray"],
 [ 1, 0,"lightgray"],
 [ 2, 0,"lightgray"],
 [ 3, 0,"lightgray"],

 [-1, 1,"lightgray"],
 [ 0, 1,"lightgray"],
 [ 1, 1,"lightgray"],
 [ 2, 1,"lightgray"],
 [ 3, 1,"lightgray"],

 [-1, 2,"lightgray"],
 [ 3, 2,"lightgray"],

 [-2, 3,"lightgray"],
 [-1, 3,"lightgray"],
 [ 2, 3,"lightgray"],
 [ 3, 3,"lightgray"],
]
},
{// L7
scale:0.09,
b:[ 
 [-3,-2,"lightgray",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,-2,"lightgray"],
 [ 1,-2,"lightgray"],
 [ 3,-2,"lightgray",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],

 [-2,-1,"blue"],
 [ 0,-1,"blue"],
 [ 2,-1,"blue"],

 [-3,-0,"lightgray"],
 [-1,-0,"lightgray"],
 [ 1,-0,"lightgray"],
 [ 3,-0,"lightgray"],

 [-2, 1,"blue"],
 [ 0, 1,"blue"],
 [ 2, 1,"blue"],

 [-3, 2,"lightgray",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1, 2,"lightgray"],
 [ 1, 2,"lightgray"],
 [ 3, 2,"lightgray",function(e){
   var i=e.gindex;  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
]
},
{// L8
b:[ 
 [-3,-2,"lightgray"],
 [-2,-2,"blue"],
 [-1,-2,"lightgray"],
 [ 0,-2,"blue"],
 [ 1,-2,"lightgray"],
 [ 2,-2,"blue"],
 [ 3,-2,"lightgray"],

 [-2,-1,"blue"],
 [ 0,-1,"blue"],
 [ 2,-1,"blue"],

 [-3,-0,"lightgray"],
 [-2,-0,"blue"],
 [-1,-0,"lightgray"],
 [ 0,-0,"blue"],
 [ 1,-0,"lightgray"],
 [ 2,-0,"blue"],
 [ 3,-0,"lightgray"],

 [-2, 1,"blue"],
 [ 0, 1,"blue"],
 [ 2, 1,"blue"],

 [-3, 2,"lightgray"],
 [-2, 2,"blue"],
 [-1, 2,"lightgray"],
 [ 0, 2,"blue"],
 [ 1, 2,"lightgray"],
 [ 2, 2,"blue"],
 [ 3, 2,"lightgray"],

]
},
{// L9
b:[ 
 [-3,-2,"bisque"],
 [-2,-3,"bisque"],
 [-2,-1,"bisque"],
 [-2,-2,"green"],
 [-1,-2,"bisque"],

 [1,-2,"green"],
 [1,-1,"darkorange"],
 [1,-0,"darkorange"],
 [0,-1,"red"],
 [2,-1,"bisque"],

 [2,1,"green"],
 [2,2,"darkorange"],
 [2,3,"darkorange"],
 [1,2,"red"],
 [3,2,"bisque"],

 [-1,2,"green"],
 [-1,3,"darkorange"],
 [-1,4,"darkorange"],
 [-2,3,"red"],
 [0,3,"bisque"],

]
},
{// L10
scale:0.085,
b:[ 
 [-1,-3,"lightgray"],
 [ 0,-3,"lightgray"],
 [ 1,-3,"lightgray"],
 [-2,-2,"lightgray"],
 [ 2,-2,"lightgray"],

 [-3, -1,"red"],
 [ 2, -1,"lightgray"],
 [ 3, -1,"lightgray"],
 [ 0, -1,"lightgray"],

 [-2, 0,"lightgray"],
 [ 4, 0,"lightgray"],

 [-2, 1,"lightgray"],
 [ 4, 1,"lightgray"],
 [ 5, 1,"lightgray"],

 [-2, 2,"lightgray"],
 [ 5, 2,"lightgray"],

 [-1, 3,"lightgray"],
 [ 4, 3,"lightgray"],

 [0, 4,"lightgray"],
 [ 1, 4,"lightgray"],
 [2, 4,"lightgray"],
 [3, 4,"lightgray"],

]
}

],
i:0
};

(function(){
//console.log("game.js");
}());



