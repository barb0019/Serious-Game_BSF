import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class InstructionScreen extends Scene {
    shouldStart;
    keyboard;
    levelsArray;
    constructor(game) {
        super(game);
        game.reset();
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        console.log(this.game.getCurrentLevel());
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            this.shouldStart = true;
            Game.play();
        }
    }
    update() {
        if (this.shouldStart) {
            if (this.game.getCurrentLevel().hasWon()) {
                this.levelsArray.splice(0, 1);
            }
            return this.game.getCurrentLevel();
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/star.png'), 310, 150);
        this.game.writeTextToCanvas('het doel van het spel is om drie sterren per level te pakken', 20, 300, 200, 'center', 'black');
        this.game.writeTextToCanvas('➡️', 20, 275, 175, 'center', 'black');
        this.game.writeTextToCanvas('uitleg instructies', 128, centerX, 110, 'center', 'black');
        this.game.writeTextToCanvas('⬅️', 20, 375, 175, 'center', 'black');
        this.game.writeTextToCanvas(`Ready ${this.game.getUser().getName()}`, 48, centerX, 450, 'center', 'black');
        this.game.writeTextToCanvas('druk op spatie', 48, centerX, 550, 'center', 'black');
    }
}
//# sourceMappingURL=InstructionScreen.js.map