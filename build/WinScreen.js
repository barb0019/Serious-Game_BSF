import Scene from './Scene.js';
import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Start from './Start.js';
export default class WinScreen extends Scene {
    continueGame = false;
    keyboard;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
    }
    update() {
        if (this.continueGame) {
            return new Start(this.game);
        }
        return null;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)) {
            for (let i = 0; i < 5; i++) {
                Game.pause(i);
            }
            this.continueGame = true;
        }
    }
    render() {
        const { canvas } = this.game;
        const win = this.game;
        this.game.ctx.clearRect(0, 0, canvas.width, canvas.height);
        win.writeTextToCanvas('Je hebt gewonnen!', canvas.height * 0.13, canvas.width / 2, canvas.height * 0.2, 'center', 'white');
        win.writeTextToCanvas(`Score: ${this.game.getUser().getScore()}`, canvas.height * 0.13, canvas.width / 2, canvas.height * 0.33, 'center', 'white');
        win.writeTextToCanvas('Druk op ENTER om opnieuw te beginnen,', canvas.height * 0.09, canvas.width / 2, canvas.height * 0.6, 'center', 'white');
        win.writeTextToCanvas('je behoudt al je items', canvas.height * 0.09, canvas.width / 2, canvas.height * 0.7, 'center', 'white');
    }
}
//# sourceMappingURL=WinScreen.js.map