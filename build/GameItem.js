import Game from './Game.js';
export default class GameItem {
    img;
    xPos;
    yPos;
    speed;
    type;
    constructor(imageSrc, xPos, yPos, type) {
        this.img = Game.loadNewImage(imageSrc);
        this.xPos = xPos;
        this.yPos = yPos;
        this.type = type;
        this.speed = 3;
    }
    setImage(img) {
        this.img = Game.loadNewImage(img);
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
    setXPos(speed) {
        this.xPos += speed;
    }
    getYPos() {
        return this.yPos;
    }
    getSpeed() {
        return this.speed;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos);
    }
    getType() {
        return this.type;
    }
}
//# sourceMappingURL=GameItem.js.map