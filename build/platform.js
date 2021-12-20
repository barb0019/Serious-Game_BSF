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
        this.xPosPrevious = [this.player.getXPos()];
        this.yPosPrevious = [this.player.getYPos()];
    }
    collidesWith(player) {
        this.xPosPrevious.push(player.getXPos());
        this.yPosPrevious.push(player.getYPos());
        if (this.xPos < player.getXPos() + player.getImageWidth()
            && this.xPos + this.img.width > player.getXPos()
            && this.yPos < player.getYPos() + player.getImageHeight()
            && this.yPos + this.img.height > player.getYPos()) {
            player.setXPos(this.xPosPrevious[1]);
            player.setYPos(this.yPosPrevious[1]);
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