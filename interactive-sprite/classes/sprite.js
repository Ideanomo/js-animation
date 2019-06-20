// Create sprite object
function SpriteObject () {
    this.sourceX = 0;
    this.sourceY = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.rotation = 0;
}

SpriteObject.prototype.setup = function (drawingSurface) {
    drawingSurface.save();
    drawingSurface.translate(this.x, this.y);
    drawingSurface.rotate(this.rotation);
    drawingSurface.restore();
};
