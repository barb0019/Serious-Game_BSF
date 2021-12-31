import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level2 from './Level.js';
import Level1 from './Level2.js';
import Scene from './Scene.js';
export default class LevelUp extends Scene {
    shouldStart;
    levelArray;
    keyboard;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.levelArray = [new Level1(this.game), new Level2(this.game)];
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_P)) {
            this.shouldStart = true;
            Game.pause();
        }
    }
    update() {
        if (this.shouldStart && this.game.getUser().getLevel() < this.levelArray.length) {
            this.game.getUser().increaseLevel();
            return this.levelArray[this.game.getUser().getLevel()];
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
        this.game.writeTextToCanvas("Type 'p' to proceed to the next level", 48, centerX, 550, 'center', 'white');
    }
}
//# sourceMappingURL=LevelUp.js.map