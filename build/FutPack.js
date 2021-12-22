import ScoringObject from './ScoringObject.js';
export default class FutPack extends ScoringObject {
    constructor(maxX, maxY, type) {
        super(`./assets/img/${type}.png`, maxX - 2, maxY - 50, 15, type);
    }
}
//# sourceMappingURL=FutPack.js.map