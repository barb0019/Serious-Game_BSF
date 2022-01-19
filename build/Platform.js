export default class Platform {
    xPos;
    yPos;
    width;
    height;
    img;
    player;
    walljumpCheck;
    timer;
    flyingSpeed;
    gameItem;
    constructor(xPos, yPos, width, height, img) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.img = img;
        this.walljumpCheck = 10;
        this.timer = 0;
        this.flyingSpeed = 2;
    }
    collidesWith(player) {
        let collision = false;
        if (!(this.checkCloseToPlayer(player))) {
            return false;
        }
        player.xPosPrevious.push(player.getXPos());
        player.yPosPrevious.push(player.getYPos());
        player.setOnPlatform(false);
        if (this.checkPixelAbovePlatform(player)) {
            collision = true;
        }
        if (this.checkPlayerInsidePlatform(player)) {
            collision = true;
        }
        return collision;
    }
    checkPixelAbovePlatform(player) {
        if (this.xPos < player.getXPos() + player.getImageWidth()
            + player.getXVel() - this.walljumpCheck
            && this.xPos + this.width > player.getXPos() - player.getXVel() + this.walljumpCheck
            && this.yPos < player.getYPos() + player.getImageHeight() + 1
            && this.yPos + this.height > player.getYPos()) {
            player.setGravity(0);
            player.setOnPlatform(true);
            return true;
        }
        return false;
    }
    wallJumping(onOrOff) {
        if (onOrOff) {
            this.walljumpCheck = 0;
        }
        else
            this.walljumpCheck = 10;
    }
    moveX() {
        this.xPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 265) {
            this.timer = 0;
            this.flyingSpeed = -this.flyingSpeed;
        }
    }
    moveX2() {
        this.xPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 270) {
            this.timer = 0;
            this.flyingSpeed = -this.flyingSpeed;
        }
    }
    moveY() {
        this.yPos += this.flyingSpeed;
        this.timer += 1;
        if (this.timer > 85) {
            this.timer = 0;
            this.flyingSpeed = -this.flyingSpeed;
        }
    }
    checkCloseToPlayer(player) {
        if (this.xPos < player.getXPos() + player.getImageWidth() + player.getXVel() + 1
            && this.xPos + this.width > player.getXPos() - player.getXVel() - 1
            && this.yPos < player.getYPos() + player.getImageHeight() + 1
            && this.yPos + this.height > player.getYPos() - 1) {
            return true;
        }
        return false;
    }
    checkPlayerInsidePlatform(player) {
        const collisionTop = this.yPos + this.height > player.getYPos() + player.getImageHeight();
        const collisionBottom = this.yPos < player.getYPos();
        const collisionRight = this.xPos < player.getXPos() + player.getImageWidth() - 10;
        const collisionLeft = this.xPos + this.width > player.getXPos() + 10;
        if (this.xPos < player.getXPos() + player.getImageWidth() + player.getXVel() + 1
            && this.xPos + this.width > player.getXPos() - player.getXVel()
            && this.yPos < player.getYPos() + player.getImageHeight()
            && this.yPos + this.height > player.getYPos()) {
            if (collisionTop && collisionRight && collisionLeft) {
                player.setYPos(this.yPos - player.getImageHeight());
                console.log('top');
                player.xPosPrevious.splice(0, 1);
                player.yPosPrevious.splice(0, 1);
                return true;
            }
            if (collisionBottom && collisionRight && collisionLeft) {
                player.setYPos(player.yPosPrevious[1] + player.getJumpHeight());
                console.log('bottom');
                player.xPosPrevious.splice(0, 1);
                player.yPosPrevious.splice(0, 1);
                player.setGravity(player.getJumpHeight());
                player.setOnPlatform(false);
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
            if (collisionRight && collisionLeft) {
                player.setXPos(player.xPosPrevious[1] - player.getXVel());
                console.log('corner');
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
//# sourceMappingURL=Platform.js.map