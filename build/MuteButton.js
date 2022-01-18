import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
export default class MuteButton extends InteractingItems {
    constructor(xPos, yPos, type) {
        super(xPos, yPos, type, './assets/img/UnMute.png');
        this.makeButton();
    }
    makeButton() {
        const muteButton = document.createElement('img');
        muteButton.style.position = 'absolute';
        muteButton.style.top = '0px';
        muteButton.style.right = '0px';
        muteButton.src = './assets/img/UnMute.png';
        muteButton.width = 50;
        document.body.append(muteButton);
        muteButton.addEventListener('click', () => {
            this.MuteorUnMute();
        });
    }
    draw(ctx) {
        ctx.drawImage(Game.loadNewImage('./assets/img/UnMute.png'), this.xPos, this.yPos, 60, 32);
    }
    MuteorUnMute() {
        console.log('test');
    }
}
//# sourceMappingURL=MuteButton.js.map