import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVel;
    yVel;
    keyBoard;
    constructor(imageSrc, maxX, maxY) {
        super(imageSrc, maxX - 76, maxY - 92);
        this.xVel = 3;
        this.yVel = 3;
        this.keyBoard = new KeyListener();
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
    getYPos() {
        return this.yPos;
    }
    increaseSpeed(size) {
        this.xVel += size;
        this.yVel += size;
    }
}
//# sourceMappingURL=Player.js.map