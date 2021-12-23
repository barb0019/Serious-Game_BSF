import ScoringObject from './ScoringObject.js';
export default class FlyingBuck extends ScoringObject {
    constructor(xPos, yPos, type, points) {
        super(`./assets/img/${type}.png`, xPos, yPos, points, type);
    }
}
//# sourceMappingURL=FlyingBuck.js.map