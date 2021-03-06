import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
export default class Door extends InteractingItems {
    constructor(xPos, yPos, type) {
        super(xPos, yPos, type, `./assets/img/door/${type}.png`);
    }
    draw(ctx, player) {
        if (player[0].collidesWith(this) && player[1].collidesWith(this)) {
            ctx.drawImage(Game.loadNewImage('./assets/img/door/DoubleDoor2.png'), this.xPos, this.yPos, 75, 100);
        }
        else if (player[0].collidesWith(this) || player[1].collidesWith(this)) {
            ctx.drawImage(Game.loadNewImage('./assets/img/door/DoubleDoor1.png'), this.xPos, this.yPos, 75, 100);
        }
        else {
            ctx.drawImage(this.img, this.xPos, this.yPos, 75, 100);
        }
    }
}
//# sourceMappingURL=Door.js.map