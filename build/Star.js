import ScoringObject from './ScoringObject.js';
export default class Star extends ScoringObject {
    player;
    height;
    width;
    constructor(xPos, yPos, type, points) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type);
    }
}
//# sourceMappingURL=Star.js.map