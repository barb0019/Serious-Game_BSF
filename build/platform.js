export default class Platform {
    xPos;
    yPos;
    width;
    height;
    img;
    constructor(xPos, yPos, width, height, img) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.img = img;
    }
    collidesWith(player) {
        if (this.xPos < player.getXPos() + player.getImageWidth()
            && this.xPos + this.img.width > player.getXPos()
            && this.yPos < player.getYPos() + player.getImageHeight()
            && this.yPos + this.img.height > player.getYPos()) {
            return true;
        }
        return false;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos);
    }
}
//# sourceMappingURL=platform.js.map