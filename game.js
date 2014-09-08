function move(e,i,l,t){
  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
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

function move3(e,i,l,t){
  e.style.left = (+100*l)+"%";  e.style.top = (+100*t)+"%"; 
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
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,-1,"blue",function(e){
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,1,"green",function(e){
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [1,-1,"orange",function(e){
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
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
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-2,2,"orange",function(e){ 
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [2,-2,"orange"],
 [2,2,"orange",function(e){
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
]
},
{// L2
c:0,
scale:0.1,
cb:function(e){
//console.log("L2 cb");

var boxes=document.querySelectorAll(".gamebox");

switch(this.c%3){
case 0:
for(var i=0;i<=10;i+=5){
move1.call(this,boxes[i+0],i+0,0,4); 
move1.call(this,boxes[i+1],i+1,0,2);

move1.call(this,boxes[i+3],i+3,0,-2); 
move1.call(this,boxes[i+4],i+4,0,-4);
}
break;
case 1:
for(var i=0;i<=10;i+=5){
move1.call(this,boxes[i+0],i+0,0,2); 
move1.call(this,boxes[i+1],i+1,0,1);

move1.call(this,boxes[i+3],i+3,0,-1); 
move1.call(this,boxes[i+4],i+4,0,-2);
}
break;
case 2:
for(var i=0;i<=10;i+=5){
move1.call(this,boxes[i+0],i+0,0,0); 
move1.call(this,boxes[i+1],i+1,0,0);

move1.call(this,boxes[i+3],i+3,0,0); 
move1.call(this,boxes[i+4],i+4,0,0);
}
break;
}

this.c=this.c+1;
},
gen:function(l){
game.l[l].c=0;
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


},
b:[]
},
{// L3
cb:function(e){
//console.log("L3 cb");

var boxes=document.querySelectorAll(".gamebox");

for(var i=0;i<=3;i+=1){
move.call(this,boxes[i],i,0,1); 
}
for(var i=8;i<=11;i+=1){
move.call(this,boxes[i],i,0,1); 
}
for(var i=16;i<=19;i+=1){
move.call(this,boxes[i],i,0,1); 
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


if(this.c%2 == 0){
for(var i=0;i<=4;i+=1){
move.call(this,boxes[i],i,0,1); 
}
}
else
{
for(var i=0;i<=4;i+=1){
move.call(this,boxes[i+5],i+5,0,-1); 
}
}

this.c=this.c+1;


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
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
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
 [ 4,-2,"red"],
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
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,-2,"lightgray"],
 [ 1,-2,"lightgray"],
 [ 3,-2,"lightgray",function(e){
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
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
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1, 2,"lightgray"],
 [ 1, 2,"lightgray"],
 [ 3, 2,"lightgray",function(e){
   var i=e.gindex;  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
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
scale:0.1,
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
cb:function(e){
var boxes=document.querySelectorAll(".gamebox");

move.call(this,boxes[+1],+1,0,-1); 

move.call(this,boxes[+3],+3,1,0); 
move.call(this,boxes[+4],+4,-1,0);

move.call(this,boxes[+5],+5,1,0); 
move.call(this,boxes[+7],+7,-1,0);
move.call(this,boxes[+6],+6,-1,0);

move.call(this,boxes[+9],+9,1,0);
move.call(this,boxes[+10],+10,-1,0);

move.call(this,boxes[+11],+11,1,0);
move.call(this,boxes[+12],+12,-1,0);
move.call(this,boxes[+13],+13,-1,0);

move.call(this,boxes[+14],+14,1,0);
move.call(this,boxes[+15],+15,-1,0);

move.call(this,boxes[+16],+16,1,0);
move.call(this,boxes[+17],+17,-1,0);


},
b:[ 
 [-1,-3,"lightgray"], // 0
 [ 0,-3,"lightgray"], // 1
 [ 1,-3,"lightgray"], // 2

 [-2,-2,"lightgray"], // 3
 [ 2,-2,"lightgray"], // 4

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
},

{// L11
scale:0.095,
c:0,
cb:function(e){
//console.log(this.c);
var boxes=document.querySelectorAll(".gamebox");

switch(this.c%4){
case 0: move3(boxes[0],0,4,4); move3(boxes[1],0,-4,-4); break
case 1: move3(boxes[0],0,-4,4); move3(boxes[1],0,4,-4);break
case 2: move3(boxes[0],0,4,-4); move3(boxes[1],0,-4,4);break
case 3: move3(boxes[0],0,-4,-4); move3(boxes[1],0,4,4);break
}
this.c=this.c+1;
},
gen:function(l){
game.l[l].c=1;
if(game.l[l].b.length>1){return;}

game.l[l].b.push([4,4,"red"]);
game.l[l].b.push([-4,-4,"gray"]);

for(var i=-3;i<=3;i+=1){
 for(var j=-3;j<=3;j+=1){
  game.l[l].b.push([i,j,"lightgrey"]);
 }
}

},

b:[]
},

{// L12
scale:0.095,
c:0,
cb:function(e){
//console.log(this.c);
var boxes=document.querySelectorAll(".gamebox");

switch(this.c%4){
case 0: move3(boxes[0],0,4,4);   move3(boxes[1],0,-4,-4); move3(boxes[2],0,-4,4);   move3(boxes[3],0,4,-4); break
case 1: move3(boxes[0],0,-4,4);  move3(boxes[1],0,4,-4);  move3(boxes[2],0,4,4);   move3(boxes[3],0,-4,-4);break
case 2: move3(boxes[0],0,4,-4);  move3(boxes[1],0,-4,4);  move3(boxes[2],0,-4,-4);   move3(boxes[3],0,4,4);break
case 3: move3(boxes[0],0,-4,-4); move3(boxes[1],0,4,4);   move3(boxes[2],0,4,-4);   move3(boxes[3],0,-4,4);break
}
this.c=this.c+1;
},
gen:function(l){
game.l[l].c=1;
if(game.l[l].b.length>1){return;}

game.l[l].b.push([4,4,"red"]);
game.l[l].b.push([-4,-4,"lightgrey"]);
game.l[l].b.push([-4,4,"red"]);
game.l[l].b.push([4,-4,"lightgrey"]);

for(var i=-3;i<=3;i+=1){
 for(var j=-3;j<=3;j+=1){
  if (i%2==0 && j%2==0){ continue;}
  game.l[l].b.push([i,j,"lightgrey"]);
 }
}


},

b:[]
},

{// L13
scale:0.095,
c:0,
cb:function(e){
//console.log(this.c);
var boxes=document.querySelectorAll(".gamebox");

this.c=this.c+1;
},

gen:function(l){
game.l[l].c=1;
if(game.l[l].b.length>1){return;}



},

b:[

 [-1,-3,"orange"], // 0
 [ 0,-3,"orange"], // 1
 [ 1,-3,"orange"], // 2

 [-2,-2,"orange"], // 0
 [-1,-2,"lightgray"], // 0
 [ 0,-2,"lightgray"], // 1
 [ 1,-2,"lightgray"], // 2
 [ 2,-2,"orange"], // 2


 [-3,-1,"orange"], // 0
 [-2,-1,"lightgray"], // 0
 [-1,-1,"lightgray"], // 0
 [ 0,-1,"lightgray"], // 1
 [ 1,-1,"lightgray"], // 2
 [ 2,-1,"lightgray"], // 2
 [ 3,-1,"orange"], // 2


 [-3,0,"orange"], // 0
 [-2,0,"lightgray"], // 0
 [-1,0,"lightgray"], // 0
 [ 0,0,"lightgray"], // 1
 [ 1,0,"lightgray"], // 2
 [ 2,0,"lightgray"], // 2
 [ 3,0,"orange"], // 2


 [-3,1,"orange"], // 0
 [-2,1,"lightgray"], // 0
 [-1,1,"lightgray"], // 0
 [ 0,1,"lightgray"], // 1
 [ 1,1,"lightgray"], // 2
 [ 2,1,"lightgray"], // 2
 [ 3,1,"orange"], // 2

 [-2,2,"orange"], // 0
 [-1,2,"lightgray"], // 0
 [ 0,2,"lightgray"], // 1
 [ 1,2,"lightgray"], // 2
 [ 2,2,"orange"], // 2

 [-1,3,"orange"], // 0
 [ 0,3,"lightgray"], // 1
 [ 1,3,"orange"], // 2



]
},


{// L14
//scale:0.095,
c:0,
cb:function(e){
//console.log(this.c);
var boxes=document.querySelectorAll(".gamebox");

var p=[ [-2,-2],[2,2],[-2,2],[2,-2],[-1,-1],[1,1],[-1,1],[1,-1] ];

for(var i=0;i<8;i++){
var j=Math.round(Math.random()*(p.length-1));
//console.log(j);
move3(boxes[i],i,p[j][0],p[j][1]);
p.splice(j,1);
}


this.c=this.c+1;
},

gen:function(l){
game.l[l].c=1;
if(game.l[l].b.length>1){return;}



},

b:[

 [-2,-2,"lightgray"], // 0
 [-1,-1,"red"], // 1

 [2,2,"lightgray"], // 0
 [1,1,"red"], // 1

 [-2,2,"lightgray"], // 0
 [-1,1,"red"], // 1

 [2,-2,"lightgray"], // 0
 [1,-1,"red"], // 1


]
},


{// L15
//scale:0.095,
c:0,
cb:function(e){
//console.log(this.c);
var boxes=document.querySelectorAll(".gamebox");

var p=this.b.slice(0);
var L=p.length;
for(var i=0;i<L;i++){
var j=Math.round(Math.random()*(p.length-1));
//console.log(j);
move3(boxes[i],i,p[j][0],p[j][1]);
p.splice(j,1);
}


this.c=this.c+1;
},

gen:function(l){
game.l[l].c=1;
if(game.l[l].b.length>1){return;}

var color="lightgrey";
for(var i=-3;i<=3;i+=1){
 for(var j=-3;j<=3;j+=1){
  if (i%2==0 && j%2==0){ color="lightgrey"}
  else if (i%2==0 || j%2==0){ color="black"} else{color="red"}
  
  game.l[l].b.push([i,j,color]);
 }
}


},

b:[]
},



{// L16
scale:0.095,
c:0,
cb:function(e){
var boxes=document.querySelectorAll(".gamebox");
var p=this.b.slice(4);
var L=p.length;
for(var i=0;i<L;i++){
var j=Math.round(Math.random()*(p.length-1));
move3(boxes[i+4],i+4,p[j][0],p[j][1]);
p.splice(j,1);
}


this.c=this.c+1;
},

gen:function(l){
game.l[l].c=1;
if(game.l[l].b.length>1){return;}

game.l[l].b.push([4,4,"red"]);
game.l[l].b.push([-4,-4,"lightgrey"]);
game.l[l].b.push([-4,4,"red"]);
game.l[l].b.push([4,-4,"lightgrey"]);

var color="lightgrey";
for(var i=-3;i<=3;i+=1){
 for(var j=-3;j<=3;j+=1){
  if (i==3 || j==3 || i==-3 || j==-3){ color="black"}
  else if (i%2==0 || j%2==0 ){ color="red"} else{color="lightgrey"}
 
  game.l[l].b.push([i,j,color]);
 }
}


},

b:[]
},



],
i:0,
lock:0,
cc:0,
};

(function(){
//console.log("game.js");
}());



