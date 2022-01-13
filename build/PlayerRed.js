import KeyListener from './KeyListener.js';
import Player from './Player.js';
export default class PlayerRed extends Player {
    keyboard;
    constructor(maxX, maxY, game) {
        super('./assets/img/RedKid2.png', maxX - 76, maxY - 92, 'red', game);
        this.keyboard = new KeyListener();
    }
    collidesWith(other) {
        return this.xPos < other.getXPos() + other.getImageWidth()
            && this.xPos + this.img.width > other.getXPos()
            && this.yPos < other.getYPos() + other.getImageHeight()
            && this.yPos + this.img.height > other.getYPos()
            && other.getType() !== 'red';
    }
}
//# sourceMappingURL=PlayerRed.js.map