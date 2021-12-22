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
        console.log(this.xPosPrevious);
        console.log(this.yPosPrevious);
        if (this.xPos < player.getXPos() + player.getImageWidth() + player.getXVel()
            && this.xPos + this.width > player.getXPos() - player.getXVel()
            && this.yPos < player.getYPos() + player.getImageHeight()
            && this.yPos + this.height > player.getYPos()) {
            if (this.yPos + this.height > player.getYPos() + player.getImageHeight()
                && this.xPos < player.getXPos() + player.getImageWidth()
                && this.xPos + this.width > player.getXPos()) {
                player.setYPos(this.yPosPrevious[0] - player.getYVel());
                console.log('top');
                this.xPosPrevious.splice(0, 1);
                this.yPosPrevious.splice(0, 1);
                return true;
            }
            if (this.yPos < player.getYPos()
                && this.xPos + this.width > player.getXPos()
                && this.xPos < player.getXPos() + player.getImageWidth()) {
                player.setYPos(this.yPosPrevious[0] + player.getYVel());
                console.log('bottom');
                this.xPosPrevious.splice(0, 1);
                this.yPosPrevious.splice(0, 1);
                return true;
            }
            if (this.xPos + this.width > player.getXPos()) {
                player.setXPos(this.xPosPrevious[0] - player.getXVel());
                console.log('left');
            }
            if (this.xPos < player.getXPos() + player.getImageWidth()) {
                player.setXPos(this.xPosPrevious[0] + player.getXVel());
                console.log('right');
            }
            this.xPosPrevious.splice(0, 1);
            this.yPosPrevious.splice(0, 1);
            return true;
        }
        this.xPosPrevious.splice(0, 1);
        this.yPosPrevious.splice(0, 1);
        return false;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
    }
}
//# sourceMappingURL=platform.js.map