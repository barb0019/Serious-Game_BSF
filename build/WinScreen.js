import Scene from './Scene.js';
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
            this.continueGame = true;
        }
    }
    render() {
        const { canvas } = this.game;
        const win = this.game;
        this.game.ctx.clearRect(0, 0, canvas.width, canvas.height);
        win.writeTextToCanvas('Je hebt gewonnen!', 100, canvas.width / 2, canvas.height / 2.5, 'center', 'black');
        win.writeTextToCanvas(`Score: ${this.game.getUser().getScore()}`, 100, canvas.width / 2, canvas.height / 2.25, 'center', 'black');
        win.writeTextToCanvas('Druk op ENTER om opnieuw te beginnen,', 80, canvas.width / 2, canvas.height / 2, 'center', 'black');
        win.writeTextToCanvas('je behoudt al je items', 80, canvas.width / 2, canvas.height / 1.6, 'center', 'black');
    }
}
//# sourceMappingURL=WinScreen.js.map