var game={
l : [
[
 [-1,-1,"red"],
 [1,0,"orange"],
 [2,2,"yellow"],
// [-1,1,"green"],
// [1,-1,"blue"],
// [-1,-2,"orange"]
],
[
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
[
 [1,1,"yellow"],
 [-1,-1,"red"],
 [1,-2,"blue"],
 [-1,2,"black"],
 [1,3,"green"],
 [-1,-3,"orange"],
 [0,-3,"blue"],
 [-1,-2,"black"],
 [-1,3,"green"],
],
[
 [0,0,"red"],
 [0,1,"red"],
 [1,0,"blue"],
 [1,1,"black"],
 [-1,0,"green"],
 [0,-1,"orange"],
],
[
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
[
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
[
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
]

],
i:1
};

(function(){
//console.log(game);
}());



