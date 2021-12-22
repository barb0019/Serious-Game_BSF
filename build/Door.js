import GameItem from './GameItem.js';
export default class Door extends GameItem {
    constructor(xPos, yPos, type) {
        super(`./assets/img/${type}.png`, xPos, yPos);
    }
}
//# sourceMappingURL=Door.js.map