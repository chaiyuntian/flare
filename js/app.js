/**
 * Created by chaiyuntian on 16/11/13.
 */

/**
 * Created by chaiyuntian on 16/11/13.
 */

var canvas = document.getElementById("canvas");
var w = canvas.width;
var h = canvas.height;
var cx = w/2.0;
var cy = h/2.0;

// draw backcolor =  black
var ctx = canvas.getContext("2d");
ctx.fillStyle="#000000";
ctx.fillRect(0,0,w,h);


var image = ctx.getImageData(0, 0, w, h);
var pixels = image.data;

i4(i1(w,h),pixels);



ctx.putImageData(image, 0, 0);


// generate
var sting = function(ctx) {

};
