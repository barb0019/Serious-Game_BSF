import ScoringObject from './ScoringObject.js';
export default class VBucks extends ScoringObject {
    constructor(maxX, maxY, type) {
        super(`./assets/img/${type}.png`, maxX - 2, maxY - 50, -5, type);
    }
}
//# sourceMappingURL=VBucks.js.map