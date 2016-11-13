/**
 * Created by chaiyuntian on 16/11/13.
 */
var ul = {};
var lerp = function(a,l,r)
{
    return l*(1.0-a)+r*a;
};

var clamp = function (v,min,max) {
    if(min>max){console.error("max < min!");}
    if(v<=min){return min;}
    if(v>=max){return max;}
    return v;
};

var max = function(v1,v2)
{
    if(v1>v2){return v1;}
    return v2;
};

var frac = function(x)
{
    return x-Math.floor(x);
};

ul.lerp = lerp;
ul.clamp = clamp;
ul.max = max;
ul.frac = frac;
