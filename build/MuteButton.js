import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
export default class MuteButton extends InteractingItems {
    constructor(xPos, yPos, type) {
        super(xPos, yPos, type, './assets/img/UnMute.png');
        this.makeButton();
    }
    makeButton() {
        const muteButton = document.createElement('muteButton');
        muteButton.style.position = 'absolute';
        muteButton.style.top = `${window.innerHeight / 1.5 + 10}px`;
        muteButton.style.right = `${window.innerWidth * 0.95}px`;
        muteButton.style.fontSize = '20px';
        muteButton.innerHTML = 'AAAAAAAAAAAAAA';
        document.body.append(muteButton);
        muteButton.addEventListener('click', () => {
            this.MuteorUnMute();
        });
    }
    draw(ctx) {
        ctx.drawImage(Game.loadNewImage('./assets/img/UnMute.png'), this.xPos, this.yPos, 60, 32);
    }
    MuteorUnMute() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=MuteButton.js.map