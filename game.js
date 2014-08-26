var game={
l : [
[ // L0
/*
 [-1,-1,"red",function(e){
   var i=e.gindex;  var otop=game.l[game.i][i][1]*100;  var etop=parseInt(e.style.top.slice(0, -1));
   if(otop == etop){ e.style.top = (etop-100)+"%"; }else{  e.style.top = (otop)+"%"; }
 }],
 [0,0,"orange"],
 [1,1,"yellow"],
*/
 [0,0,"red"],
 [1,1,"gray",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,-1,"blue",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,1,"green",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [1,-1,"orange",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 ],

[ // L1
 [0,0,"black"],
 [1,1,"gray"],
 [-1,-1,"blue"],
 [-1,1,"gray"],
 [1,-1,"blue"],
 [-2,-2,"orange",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-2,2,"orange",function(e){ 
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [2,-2,"orange"],
 [2,2,"orange",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
],
[ // L2
 [-2,-3,"gray"],
 [-3,-2,"gray"],
 [-2,-1,"black"],
 [-1,-2,"orange"],

 [0,-2,"blue"],
 [1,-1,"blue"],
 [1,-3,"blue"],
 [2,-2,"orange"],
 [3,-1,"orange"],

 [-1,0,"gray"],
 [ 0,0,"gray"],


 [-2,1,"gray"],
 [-3,2,"gray"],
 [-2,3,"black"],
 [-1,1,"orange"],
 [0,1,"orange"],
 [1,1,"gray"],
 [2,2,"gray"],
 [1,3,"black"],

],
[ // L3
 [-3,-3,"green"],
 [-2,-2,"red"],
 [-2,-1,"red"],
 [-1,-1,"blue"],
 [-1,0,"black"],
 [-1,1,"green"],
 [0,0,"red"],
 [0,1,"red"],
 [1,0,"blue"],
 [1,1,"black"],
 [2,2,"green"],
 [2,1,"orange"],
 [3,3,"orange"],
 [-2,1,"red"],
 [-2,2,"red"],
 [-1,-3,"green"],
 [0,-1,"orange"],
],
[ // L4
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

],
[ // L5
 ["scale",0.1],
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
 [ 1, 3,"black"],

 [ -2, 4,"lightgray"],


],
[ // L6
 ["scale",0.1],
 [-1,-4,"lightgray"],
 [-3,-3,"red"],
 [-2,-3,"lightgray"],
 [-1,-3,"lightgray"],

 [-3,-2,"lightgray"],
 [-2,-2,"lightgray"],
 [-1,-2,"lightgray"],

 [-1,-1,"lightgray"],
 [ 0,-1,"lightgray"],
 [ 1,-1,"lightgray"],
 [ 2,-1,"lightgray"],
 [ 3,-1,"lightgray"],
 [ 4,-2,"lightgray"],
 [ 4,-1,"black"],

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


],
[ // L7
 [-3,-2,"magenta",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1,-2,"magenta"],
 [ 1,-2,"magenta"],
 [ 3,-2,"magenta",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop-100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],

 [-2,-1,"blue"],
 [ 0,-1,"blue"],
 [ 2,-1,"blue"],

 [-3,-0,"magenta"],
 [-1,-0,"magenta"],
 [ 1,-0,"magenta"],
 [ 3,-0,"magenta"],

 [-2, 1,"blue"],
 [ 0, 1,"blue"],
 [ 2, 1,"blue"],

 [-3, 2,"magenta",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft-100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
 [-1, 2,"magenta"],
 [ 1, 2,"magenta"],
 [ 3, 2,"magenta",function(e){
   var i=e.gindex;  var oleft=game.l[game.i][i][0]*100; var otop=game.l[game.i][i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100)+"%";  e.style.top = (etop+100)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
 }],
],
[ // L8
 [-3,-2,"magenta"],
 [-2,-2,"blue"],
 [-1,-2,"magenta"],
 [ 0,-2,"blue"],
 [ 1,-2,"magenta"],
 [ 2,-2,"blue"],
 [ 3,-2,"magenta"],

 [-2,-1,"blue"],
 [ 0,-1,"blue"],
 [ 2,-1,"blue"],

 [-3,-0,"magenta"],
 [-2,-0,"blue"],
 [-1,-0,"magenta"],
 [ 0,-0,"blue"],
 [ 1,-0,"magenta"],
 [ 2,-0,"blue"],
 [ 3,-0,"magenta"],

 [-2, 1,"blue"],
 [ 0, 1,"blue"],
 [ 2, 1,"blue"],

 [-3, 2,"magenta"],
 [-2, 2,"blue"],
 [-1, 2,"magenta"],
 [ 0, 2,"blue"],
 [ 1, 2,"magenta"],
 [ 2, 2,"blue"],
 [ 3, 2,"magenta"],

],
[ // L9
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
],
i:6
};

(function(){
//console.log(game);
}());



