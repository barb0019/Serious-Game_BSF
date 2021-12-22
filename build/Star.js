import ScoringObject from './ScoringObject.js';
export default class Star extends ScoringObject {
    player;
    height;
    width;
    constructor(xPos, yPos, type) {
        super(`./assets/img/${type}.png`, 450, 450, 15, type);
    }
}
//# sourceMappingURL=Star.js.map