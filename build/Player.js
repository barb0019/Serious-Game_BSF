import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVel;
    yVel;
    keyBoard;
    xPosPrevious;
    yPosPrevious;
    count;
    gravity;
    onPlatform;
    jumpHeight;
    static gravityIncrease = 0.05;
    isJumping;
    constructor(imageSrc, maxX, maxY) {
        super(imageSrc, maxX - 76, maxY - 92);
        this.xVel = 3;
        this.yVel = 3;
        this.jumpHeight = 4.5;
        this.count = 0;
        this.keyBoard = new KeyListener();
        this.xPosPrevious = [];
        this.yPosPrevious = [];
        this.xPosPrevious.push(0);
        this.yPosPrevious.push(0);
        this.gravity = 0;
    }
    increaseGravity() {
        if (!this.onPlatform) {
            this.yPos += this.gravity;
            this.count = 0;
            this.gravity += Player.gravityIncrease;
            if (this.gravity > 10) {
                this.gravity = 10;
            }
            this.count += 1;
        }
    }
    jump() {
        if (this.jumpHeight < this.gravity / 2 && !this.onPlatform) {
            this.yPos -= this.jumpHeight;
        }
        else if (!this.onPlatform) {
            this.yPos -= this.jumpHeight;
        }
        else {
            this.isJumping = false;
            this.jumpMusic();
        }
    }
    setXPos(xPos) {
        this.xPos = xPos;
    }
    setYPos(yPos) {
        this.yPos = yPos;
    }
    getXVel() {
        return this.xVel;
    }
    getYVel() {
        return this.yVel;
    }
    getXPos() {
        return this.xPos;
    }
    setGravity(gravity) {
        this.gravity = gravity;
    }
    setOnPlatform(trueOrFalse) {
        this.onPlatform = trueOrFalse;
    }
    increaseSpeed(size) {
        this.xVel += size;
        this.yVel += size;
    }
    jumpMusic() {
        const jumpMusic = new Audio('./assets/jumpMusic.mp3');
        jumpMusic.play();
    }
}
//# sourceMappingURL=Player.js.map