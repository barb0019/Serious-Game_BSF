export default class UserData {
    name;
    score;
    level;
    alive;
    constructor() {
        this.level = 1;
        this.score = 0;
        this.alive = true;
        this.name = 'Player 1 and 2';
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getScore() {
        return this.score;
    }
    addScore(points) {
        this.score += points;
    }
    getLevel() {
        return this.level;
    }
    increaseLevel() {
        console.log('+1');
        this.level += 1;
    }
    getAlive() {
        return this.alive;
    }
    setDeadorNot(boolean) {
        this.alive = boolean;
    }
}
//# sourceMappingURL=UserData.js.map