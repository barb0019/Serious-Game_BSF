export default class Platform {
    xPos;
    yPos;
    width;
    height;
    img;
    player;
    constructor(xPos, yPos, width, height, img) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.img = img;
    }
    collidesWith(player) {
        player.xPosPrevious.push(player.getXPos());
        player.yPosPrevious.push(player.getYPos());
        if (this.xPos < player.getXPos() + player.getImageWidth() + player.getXVel()
            && this.xPos + this.width > player.getXPos() - player.getXVel()
            && this.yPos < player.getYPos() + player.getImageHeight()
            && this.yPos + this.height > player.getYPos()) {
            if (this.yPos + this.height > player.getYPos() + player.getImageHeight()
                && this.xPos < player.getXPos() + player.getImageWidth()
                && this.xPos + this.width > player.getXPos()) {
                player.setYPos(player.yPosPrevious[0] - player.getYVel());
                console.log('top');
                player.xPosPrevious.splice(0, 1);
                player.yPosPrevious.splice(0, 1);
                return true;
            }
            if (this.yPos < player.getYPos()
                && this.xPos + this.width > player.getXPos()
                && this.xPos < player.getXPos() + player.getImageWidth()) {
                player.setYPos(player.yPosPrevious[0] + player.getYVel());
                console.log('bottom');
                player.xPosPrevious.splice(0, 1);
                player.yPosPrevious.splice(0, 1);
                return true;
            }
            if (this.xPos + this.width > player.getXPos()) {
                player.setXPos(player.xPosPrevious[0] - player.getXVel());
                console.log('left');
            }
            if (this.xPos < player.getXPos() + player.getImageWidth()) {
                player.setXPos(player.xPosPrevious[0] + player.getXVel());
                console.log('right');
            }
            player.xPosPrevious.splice(0, 1);
            player.yPosPrevious.splice(0, 1);
            return true;
        }
        player.xPosPrevious.splice(0, 1);
        player.yPosPrevious.splice(0, 1);
        return false;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
    }
}
//# sourceMappingURL=platform.js.map