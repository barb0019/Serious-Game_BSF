import ScoringObject from './ScoringObject.js';
export default class FutPack extends ScoringObject {
    constructor(xPos, yPos, type, points) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type);
    }
}
//# sourceMappingURL=FutPack.js.map