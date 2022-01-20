import ScoringObject from './ScoringObject.js';
export default class FutPack extends ScoringObject {
    constructor(xPos, yPos, type, points) {
        super(`./assets/img/enemies/pack${type}.png`, xPos, yPos, points, type, false);
    }
}
//# sourceMappingURL=FutPack.js.map