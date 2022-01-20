import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Start from './Start.js';
export default class GameOver extends Scene {
    shouldStart;
    keyboard;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            for (let i = 0; i < 5; i++) {
                Game.pause(i);
            }
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart) {
            this.game.resetBoughtItems();
            return new Start(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas('Game Over', 128, centerX, 250, 'center', 'black');
        const msg = `${this.game.getUser().getName()} score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'black');
        this.game.writeTextToCanvas("Type 'space' to continue", 48, centerX, 550, 'center', 'black');
    }
}
//# sourceMappingURL=GameOver.js.map