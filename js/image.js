var id1 = function(x,y){
    return y*w+x;
};

var id4 = function(x,y)
{
    return (y*w+x)*4;
};


// image processing based on the gray scale image
var i1 = function(w,h,d)
{
    var l = w*h;
    if(!d)d= new Float32Array(l);
    d.w = w;
    d.h = h;
    d.getPx = function(x,y)
    {
        return d[y*w+x];
    };

    d.setPx = function(x,y,v)
    {
        d[y*w+x] = v;
    };

    var i=0;
    for(i=0;i<l;i++)
    {
        d[i] = 1.0;
    }
    return d;
};

// 4 channel image data
var i4 = function(s,d)
{
    var l = s.length*4;
    if(!d)d= new Uint8Array(l);
    var c;
    for (var i = 0; i < l; i += 4) {
        c = s[i>>2]*255;
        d[i] =  c;
        d[i+1] = c;
        d[i+2] = c;
        d[i+3] = 255;
    }
    return d;
};

// texture sample
var ts = function(s,u,v) {
    // using auto repeat mode
    u = u%1.0;
    v = v%1.0;

    var x = s.w*u;
    var y = s.h*v;
    var ax = ul.frac(x);
    var ay = ul.frac(y);
    var x0 = Math.floor(x);
    var x1 = x0+1;
    var y0 = Math.floor(y);
    var y1 = y0+1;

    // get 4 element to lerp
    var c00 = s.get(x0,y0);
    var c01 = s.get(x1,y0);
    var c10 = s.get(x0,y1);
    var c11 = s.get(x1,y1);

    // bi-directional lerp
    var c0 = ul.lerp(ax,c00,c01);
    var c1 = ul.lerp(ax,c10,c11);
    return ul.lerp(ay,c0,c1);

};

var blur = function(d,s)
{
    var l = s.length;
    if (!d) d = new Uint32Array(l);
    for (var i = 0; i < l; i += 1) {
        d[i] = 255 - s[i];
    }
    return d;
};