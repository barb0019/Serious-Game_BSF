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
        const collisionTop = this.yPos + this.height > player.getYPos() + player.getImageHeight();
        const collisionBottom = this.yPos < player.getYPos();
        const collisionRight = this.xPos < player.getXPos() + player.getImageWidth();
        const collisionLeft = this.xPos + this.width > player.getXPos();
        player.xPosPrevious.push(player.getXPos());
        player.yPosPrevious.push(player.getYPos());
        if (this.xPos < player.getXPos() + player.getImageWidth() + player.getXVel()
            && this.xPos + this.width > player.getXPos() - player.getXVel()
            && this.yPos < player.getYPos() + player.getImageHeight()
            && this.yPos + this.height > player.getYPos()) {
            if (this.yPos + this.height
                > player.getYPos() + player.getImageHeight() + player.getImageHeight() / 2
                || this.yPos + this.height
                    > player.getYPos() + player.getImageHeight() - this.height) {
                player.setGravity(0);
                player.setOnPlatform(true);
                console.log('platform');
            }
            if (collisionTop
                && collisionRight
                && collisionLeft) {
                player.setYPos(player.yPosPrevious[1] - player.getYVel());
                console.log('top');
                player.xPosPrevious.splice(0, 1);
                player.yPosPrevious.splice(0, 1);
                return true;
            }
            if (collisionBottom
                && collisionRight
                && collisionLeft) {
                player.setYPos(player.yPosPrevious[1] + player.getYVel());
                console.log('bottom');
                player.xPosPrevious.splice(0, 1);
                player.yPosPrevious.splice(0, 1);
                return true;
            }
            if (collisionLeft) {
                player.setXPos(player.xPosPrevious[1] - player.getXVel());
                console.log('left');
            }
            if (collisionRight) {
                player.setXPos(player.xPosPrevious[1] + player.getXVel());
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