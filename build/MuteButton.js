import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
export default class MuteButton extends InteractingItems {
    constructor(xPos, yPos, type) {
        super(xPos, yPos, type, './assets/img/UnMute.png');
    }
    draw(ctx) {
        ctx.drawImage(Game.loadNewImage('./assets/img/UnMute.png'), this.xPos, this.yPos, 60, 32);
    }
}
//# sourceMappingURL=MuteButton.js.map