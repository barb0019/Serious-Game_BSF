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
        win.writeTextToCanvas('YOU WIN', 100, canvas.width / 2, canvas.height / 2, 'center', 'black');
        win.writeTextToCanvas('Click ENTER om opnieuw te beginnen, je houdt al je items', 100, canvas.width / 2, canvas.height / 2.5, 'center', 'black');
    }
}
//# sourceMappingURL=WinScreen.js.map