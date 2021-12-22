import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVel;
    yVel;
    keyBoard;
    xPosPrevious;
    yPosPrevious;
    count;
    constructor(imageSrc, maxX, maxY) {
        super(imageSrc, maxX - 76, maxY - 92);
        this.xVel = 3;
        this.yVel = 3;
        this.count = 0;
        this.keyBoard = new KeyListener();
        this.xPosPrevious = [];
        this.yPosPrevious = [];
        this.xPosPrevious.push(0);
        this.yPosPrevious.push(0);
    }
    increaseGravity() {
        if (this.count % 8 === 0) {
            this.yPos += 9.81;
        }
        this.count += 1;
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
    increaseSpeed(size) {
        this.xVel += size;
        this.yVel += size;
    }
}
//# sourceMappingURL=Player.js.map