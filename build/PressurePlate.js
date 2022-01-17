import Game from './Game.js';
export default class PressurePlate {
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
    draw(ctx, player) {
        if (player[0].collidesWith(this) || player[1].collidesWith(this)) {
            ctx.drawImage(Game.loadNewImage('./assets/img/titled_yellow_power_icon.png'), this.xPos, this.yPos, 75, 100);
        }
        else {
            ctx.drawImage(this.img, this.xPos, this.yPos, 60, 32);
        }
    }
}
//# sourceMappingURL=PressurePlate.js.map