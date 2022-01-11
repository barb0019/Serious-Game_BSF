import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
export default class Shop extends Scene {
    keyboard;
    levelArray;
    continueGame;
    constructor(game, levelArray) {
        super(game);
        this.levelArray = levelArray;
        this.keyboard = new KeyListener();
        this.continueGame = false;
    }
    update(elapsed) {
        if (this.continueGame && this.game.getUser().getLevel() < this.levelArray.length) {
            this.game.getUser().increaseLevel();
            return this.levelArray[this.game.getUser().getLevel() - 1];
        }
        return null;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)) {
            this.continueGame = true;
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.game.writeTextToCanvas('SHOP', 90, this.game.canvas.width / 2, this.game.canvas.height / 5, 'center', 'black');
        this.game.writeTextToCanvas('Press enter to leave', 70, this.game.canvas.width / 2, this.game.canvas.height / 3, 'center', 'black');
    }
}
//# sourceMappingURL=Shop.js.map