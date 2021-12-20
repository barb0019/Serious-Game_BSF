export default class Platform {
    xPos;
    yPos;
    width;
    height;
    img;
    xPosPrevious;
    yPosPrevious;
    player;
    constructor(xPos, yPos, width, height, img) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.img = img;
        this.xPosPrevious = [];
        this.yPosPrevious = [];
        this.xPosPrevious.push(0);
        this.yPosPrevious.push(0);
    }
    collidesWith(player) {
        this.xPosPrevious.push(player.getXPos());
        this.yPosPrevious.push(player.getYPos());
        if (this.xPos < player.getXPos() + player.getImageWidth()
            && this.xPos + this.img.width > player.getXPos()
            && this.yPos < player.getYPos() + player.getImageHeight()
            && this.yPos + this.img.height > player.getYPos()) {
            player.setXPos(this.xPosPrevious[1] - (player.getImageWidth() - this.img.width));
            player.setYPos(this.yPosPrevious[1] - (player.getImageHeight() - this.img.height));
            this.xPosPrevious.splice(1, 1);
            this.yPosPrevious.splice(1, 1);
            return true;
        }
        this.xPosPrevious.splice(1, 1);
        this.yPosPrevious.splice(1, 1);
        return false;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos);
    }
}
//# sourceMappingURL=platform.js.map