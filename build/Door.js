import Game from './Game.js';
export default class Door {
    img;
    xPos;
    yPos;
    constructor(xPos, yPos, type) {
        this.img = Game.loadNewImage(`./assets/img/${type}.png`);
        this.xPos = xPos;
        this.yPos = yPos;
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
        ctx.drawImage(this.img, this.xPos, this.yPos, 75, 100);
    }
}
//# sourceMappingURL=Door.js.map