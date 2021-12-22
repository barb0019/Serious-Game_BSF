import ScoringObject from './ScoringObject.js';
export default class Star extends ScoringObject {
    player;
    height;
    width;
    constructor(maxX, maxY, type) {
        super(`./assets/img/${type}.png`, maxX - 2, maxY - 50, 15, type);
        this.height = maxY - 50;
        this.width = maxX - 2;
    }
}
//# sourceMappingURL=Star.js.map