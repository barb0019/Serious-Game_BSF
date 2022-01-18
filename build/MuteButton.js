import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
export default class MuteButton extends InteractingItems {
    muted;
    constructor(xPos, yPos, type) {
        super(xPos, yPos, type, './assets/img/UnMute.png');
        this.makeButton();
        this.muted = false;
    }
    makeButton() {
        const muteButton = document.createElement('img');
        muteButton.style.position = 'absolute';
        muteButton.style.top = '0px';
        muteButton.style.right = '0px';
        muteButton.src = './assets/img/UnMuteV2.png';
        muteButton.width = 50;
        document.body.append(muteButton);
        muteButton.addEventListener('click', () => {
            if (this.muted === true) {
                muteButton.src = './assets/img/UnMuteV2.png';
                this.muted = false;
                Game.play();
            }
            else {
                Game.pause();
                muteButton.src = './assets/img/UnMute.png';
                this.muted = true;
            }
        });
    }
    draw(ctx) {
        ctx.drawImage(Game.loadNewImage('./assets/img/UnMute.png'), this.xPos, this.yPos, 60, 32);
    }
}
//# sourceMappingURL=MuteButton.js.map