import KeyListener from './KeyListener.js';
import Player from './Player.js';
export default class PlayerBlue extends Player {
    keyboard;
    constructor(maxX, maxY, game) {
        super('./assets/img/blueKid.png', maxX - 76, maxY - 92, 'blue', game);
        this.keyboard = new KeyListener();
    }
    move(canvas) {
        const minX = 0;
        const maxX = canvas.width - this.img.width;
        const minY = 0;
        if (this.keyboard.isKeyDown(KeyListener.KEY_D) && this.xPos < maxX) {
            this.xPos += this.xVel;
            if (this.xPos > maxX) {
                this.xPos = maxX;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_A) && this.xPos > minX) {
            this.xPos -= this.xVel;
            if (this.xPos < minX) {
                this.xPos = minX;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_W) && this.yPos > minY) {
            if (this.onPlatform) {
                this.isJumping = true;
                this.setOnPlatform(false);
            }
        }
        if (this.isJumping === true) {
            this.jump();
            if (this.yPos < minY) {
                this.yPos = minY;
            }
        }
    }
    collidesWith(other) {
        return this.xPos < other.getXPos() + other.getImageWidth()
            && this.xPos + this.img.width > other.getXPos()
            && this.yPos < other.getYPos() + other.getImageHeight()
            && this.yPos + this.img.height > other.getYPos()
            && other.getType() !== 'blue';
    }
}
//# sourceMappingURL=playerblue.js.map