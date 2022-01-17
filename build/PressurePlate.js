import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
export default class PressurePlate extends InteractingItems {
    constructor(xPos, yPos, type) {
        super(xPos, yPos, type, './assets/img/ButtonNeutral.png');
        this.img = Game.loadNewImage('./assets/img/ButtonNeutral.png');
    }
    draw(ctx, player) {
        if (player[0].collidesWith(this) || player[1].collidesWith(this)) {
            ctx.drawImage(Game.loadNewImage('./assets/img/ButtonEnd.png'), this.xPos, this.yPos, 60, 32);
        }
        else {
            ctx.drawImage(this.img, this.xPos, this.yPos, 60, 32);
        }
    }
}
//# sourceMappingURL=PressurePlate.js.map