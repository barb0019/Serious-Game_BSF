import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
export default class MuteButton extends InteractingItems {
    static muted;
    game;
    constructor(xPos, yPos, type, game) {
        super(xPos, yPos, type, './assets/img/UnMute.png');
        this.makeButton();
        MuteButton.muted = false;
        this.game = game;
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
            if (MuteButton.muted === true) {
                muteButton.src = './assets/img/UnMuteV2.png';
                MuteButton.muted = false;
                Game.play(this.game.getUser().getLevel() - 1);
            }
            else {
                Game.pause(this.game.getUser().getLevel() - 1);
                muteButton.src = './assets/img/UnMute.png';
                MuteButton.muted = true;
            }
        });
    }
    draw(ctx) {
        ctx.drawImage(Game.loadNewImage('./assets/img/UnMute.png'), this.xPos, this.yPos, 60, 32);
    }
}
//# sourceMappingURL=MuteButton.js.map