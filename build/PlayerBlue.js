import KeyListener from './KeyListener.js';
import Player from './Player.js';
export default class PlayerBlue extends Player {
    keyboard;
    constructor(maxX, maxY, game) {
        super('./assets/img/BlueKid2.png', maxX - 76, maxY - 92, 'blue', game);
        this.keyboard = new KeyListener();
    }
    collidesWith(other) {
        return this.xPos < other.getXPos() + other.getImageWidth()
            && this.xPos + this.img.width > other.getXPos()
            && this.yPos < other.getYPos() + other.getImageHeight()
            && this.yPos + this.img.height > other.getYPos()
            && other.getType() !== 'blue';
    }
}
//# sourceMappingURL=PlayerBlue.js.map