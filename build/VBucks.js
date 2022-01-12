import ScoringObject from './ScoringObject.js';
export default class VBucks extends ScoringObject {
    constructor(xPos, yPos, type, points) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type, false);
    }
}
//# sourceMappingURL=VBucks.js.map