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
 [-2,-4,"gray"],
 [-3,-3,"gray"],
 [-2,-2,"black"],
 [-1,-3,"orange"],

 [0,-3,"blue"],
 [1,-2,"blue"],
 [1,-4,"blue"],
 [2,-3,"orange"],

 [-1,-1,"gray"],
 [0,-1,"gray"],


 [-2,0,"gray"],
 [-3,1,"gray"],
 [-2,2,"black"],
 [-1,0,"orange"],
 [0,0,"orange"],
 [1,0,"gray"],
 [2,1,"gray"],
 [1,2,"black"],

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
 [0,0,"red"],
 [0,-1,"red"],
 [0,1,"yellow"],
 [-1,-3,"black"],
 [1,-2,"blue"],
 [-1,-2,"black"],
 [1,-3,"green"],
 [-1,-2,"orange"],
 [-1,-2,"black"],
 [1,-3,"green"],
 [-1,-2,"orange"],
],
[ // L5
 [0,0,"red"],
 [0,1,"red"],
 [1,0,"yellow"],
 [1,1,"black"],
 [1,2,"blue"],
 [2,1,"black"],
 [2,2,"green"],
 [-1,-2,"orange"],
 [1,-3,"green"],
 [-1,-2,"orange"],
],
[ // L6
 [2,2,"red"],
 [2,-1,"red"],
 [2,-2,"yellow"],
 [-3,1,"black"],
 [-1,2,"blue"],
 [-3,-3,"black"],
 [-2,-2,"green"],
 [-1,-2,"orange"],
 [1,-3,"green"],
 [-1,-2,"orange"],
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
i:0
};

(function(){
//console.log(game);
}());



