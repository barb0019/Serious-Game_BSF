import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVel;
    keyBoard;
    xPosPrevious;
    yPosPrevious;
    count;
    gravity;
    onPlatform;
    jumpHeight;
    static gravityIncrease = 0.2;
    static maxGravity = 100;
    isJumping;
    game;
    constructor(imageSrc, maxX, maxY, type, game) {
        super(imageSrc, maxX - 76, maxY - 92, type);
        this.game = game;
        this.xVel = 5;
        this.jumpHeight = Player.gravityIncrease * 50;
        this.count = 0;
        this.keyBoard = new KeyListener();
        this.xPosPrevious = [];
        this.yPosPrevious = [];
        this.xPosPrevious.push(0);
        this.yPosPrevious.push(0);
        this.gravity = 0;
        this.checkBoughtItems();
    }
    checkBoughtItems() {
        const boughtItems = this.game.getBoughtItems();
        for (let i = 0; i < boughtItems.length; i++) {
            if (boughtItems[i] === 0) {
                this.jumpHeight *= 1.2;
            }
            if (boughtItems[i] === 1) {
                this.xVel *= 1.2;
            }
        }
    }
    increaseGravity() {
        if (!this.onPlatform) {
            this.yPos += this.gravity;
            this.count = 0;
            this.gravity += Player.gravityIncrease;
            if (this.gravity > Player.maxGravity) {
                this.gravity = Player.maxGravity;
            }
            this.count += 1;
        }
    }
    jump() {
        if (!this.onPlatform) {
            this.yPos -= this.jumpHeight;
        }
        else {
            this.jumpMusic();
            this.isJumping = false;
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
    getGravity() {
        return this.gravity;
    }
    getXPos() {
        return this.xPos;
    }
    getJumpHeight() {
        return this.jumpHeight;
    }
    setGravity(gravity) {
        this.gravity = gravity;
    }
    setOnPlatform(trueOrFalse) {
        this.onPlatform = trueOrFalse;
    }
    increaseSpeed(size) {
        this.xVel += size;
    }
    jumpMusic() {
        const jumpMusic = new Audio('./assets/jumpMusic.mp3');
        jumpMusic.play();
    }
}
//# sourceMappingURL=Player.js.map