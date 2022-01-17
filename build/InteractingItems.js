import Game from './Game.js';
export default class InteractingItems {
    img;
    xPos;
    yPos;
    type;
    constructor(xPos, yPos, type) {
        this.img = Game.loadNewImage('./assets/img/ButtonNeutral.png');
        this.xPos = xPos;
        this.yPos = yPos;
        this.type = type;
    }
    getType() {
        return this.type;
    }
    getImageHeight() {
        return this.img.height;
    }
    getImageWidth() {
        return this.img.width;
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
}
//# sourceMappingURL=InteractingItems.js.map