import Game from './Game.js';
import KeyListener from './KeyListener.js';
import MuteButton from './MuteButton.js';
import Scene from './Scene.js';
import Shop from './Shop.js';
import WinScreen from './WinScreen.js';
export default class LevelUp extends Scene {
    shouldStart;
    levelArray;
    keyboard;
    toShop;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_P)) {
            this.shouldStart = true;
            Game.pause(this.game.getUser().getLevel() - 1);
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            this.toShop = true;
            for (let i = 0; i < 5; i++) {
                Game.pause(i);
            }
        }
    }
    update() {
        if (this.toShop) {
            return new Shop(this.game, this.game.getCurrentLevel());
        }
        if (this.shouldStart && this.game.getUser().getLevel() + 1 <= 5) {
            for (let i = 0; i < 5; i++) {
                Game.pause(i);
            }
            if (MuteButton.muted === false) {
                Game.play(this.game.getUser().getLevel());
            }
            this.game.getUser().increaseLevel();
            return this.game.getCurrentLevel();
        }
        if (this.shouldStart) {
            return new WinScreen(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        const line1 = `Level ${this.game.getUser().getLevel()} Clear`;
        this.game.writeTextToCanvas(line1, 128, centerX, 250, 'center', 'red');
        const msg = `${this.game.getUser().getName()} score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'yellow');
        this.game.writeTextToCanvas("Type 'p' to proceed to the next level", 48, centerX, 550, 'center', 'black');
        this.game.writeTextToCanvas("Press 'space' to go to the shop", 48, centerX, 600, 'center', 'black');
    }
}
//# sourceMappingURL=LevelUp.js.map