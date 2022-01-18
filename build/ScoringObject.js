import GameItem from './GameItem.js';
export default class ScoringObject extends GameItem {
    score;
    alive;
    constructor(imageSrc, xPos, yPos, score, type, alive) {
        super(imageSrc, xPos, yPos, type);
        this.score = score;
        this.alive = alive;
    }
    getScore() {
        return this.score;
    }
    move() {
    }
    move1() {
    }
    move2() {
    }
    moveY() {
    }
    moveY2() {
    }
    getAlive() {
        return this.alive;
    }
}
//# sourceMappingURL=ScoringObject.js.map