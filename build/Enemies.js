import ScoringObject from './ScoringObject.js';
export default class Enemies extends ScoringObject {
    flyingSpeed;
    game;
    flyingSpeed1;
    constructor(imageSrc, xPos, yPos, score, type, alive, game) {
        super(imageSrc, xPos, yPos, score, type, alive);
        this.game = game;
        this.flyingSpeed = 0;
        this.flyingSpeed1 = 0;
        this.checkBoughtItems();
    }
    checkBoughtItems() {
        const boughtItems = this.game.getBoughtItems();
        for (let i = 0; i < boughtItems.length; i++) {
            if (boughtItems[i] === 3) {
                this.flyingSpeed += 3;
            }
        }
    }
    move() { }
}
//# sourceMappingURL=Enemies.js.map