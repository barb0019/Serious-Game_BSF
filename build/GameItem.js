import Game from './Game.js';
export default class GameItem {
    img;
    xPos;
    yPos;
    type;
    constructor(imageSrc, xPos, yPos, type) {
        this.img = Game.loadNewImage(imageSrc);
        this.xPos = xPos;
        this.yPos = yPos;
        this.type = type;
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
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos);
    }
    getType() {
        return this.type;
    }
}
//# sourceMappingURL=GameItem.js.map