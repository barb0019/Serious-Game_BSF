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
        const { width } = this.game.canvas;
        const { height } = this.game.canvas;
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/star.png'), width * 0.2, height * 0.2);
        this.game.writeTextToCanvas('het doel van het spel is om drie sterren per level te pakken en samen naar de deur te gaan', height * 0.027, width * 0.26, height * 0.26, 'center', 'black');
        this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.18, height * 0.23, 'center', 'black');
        this.game.writeTextToCanvas('uitleg instructies', 128, centerX, height * 0.15, 'center', 'black');
        this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.24, height * 0.23, 'center', 'black');
        this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.18, height * 0.32, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/DoubleDoor0.png'), width * 0.19, height * 0.29);
        this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.24, height * 0.32, 'center', 'black');
        this.game.writeTextToCanvas(`Ready ${this.game.getUser().getName()}`, 48, centerX, 450, 'center', 'black');
        this.game.writeTextToCanvas('druk op spatie', 48, centerX, 550, 'center', 'black');
    }
}
//# sourceMappingURL=InstructionScreen.js.map