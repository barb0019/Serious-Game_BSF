import Player from './Player.js';
export default class PlayerRed extends Player {
    constructor(maxX, maxY, game) {
        super('./assets/img/player/RedKid2.png', maxX - 76, maxY - 92, 'red', game);
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