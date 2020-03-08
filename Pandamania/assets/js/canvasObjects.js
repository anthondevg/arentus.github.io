function draw() {
    
    var canvas = document.getElementById('headerWing');
    var bW = document.body.clientWidth;
    var bH = document.body.clientHeight;
    
    canvas.width = bW; 
    canvas.height = bH;
    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        
        ctx.moveTo(0, 0);
        ctx.lineTo(bH + 100, 0);
        ctx.lineTo(bW/2-200, bH);
        ctx.lineTo(0, bH);
        ctx.closePath();
        ctx.fillStyle = '#2db15e';
        
        ctx.fill();
    }
}

