import KeyListener from './KeyListener.js';
import Player from './Player.js';
export default class PlayerRed extends Player {
    keyboard;
    constructor(maxX, maxY) {
        super('./assets/img/character_robot_walk0.png', maxX - 76, maxY - 92);
        this.keyboard = new KeyListener();
    }
    move(canvas) {
        const minX = 0;
        const maxX = canvas.width - this.img.width;
        const minY = 0;
        const maxY = canvas.height - this.img.height;
        if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT) && this.xPos < maxX) {
            this.xPos += this.xVel;
            if (this.xPos > maxX) {
                this.xPos = maxX;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT) && this.xPos > minX) {
            this.xPos -= this.xVel;
            if (this.xPos < minX) {
                this.xPos = minX;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_UP) && this.yPos > minY) {
            if (this.onPlatform) {
                this.yPos -= this.jumpHeight;
                if (this.yPos < minY) {
                    this.yPos = minY;
                }
                this.setOnPlatform(false);
            }
        }
    }
    collidesWith(other) {
        return this.xPos < other.getXPos() + other.getImageWidth()
            && this.xPos + this.img.width > other.getXPos()
            && this.yPos < other.getYPos() + other.getImageHeight()
            && this.yPos + this.img.height > other.getYPos();
    }
}
//# sourceMappingURL=PlayerRed.js.map