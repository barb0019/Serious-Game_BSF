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
        this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');
        this.game.writeTextToCanvas('hoe doel van het spel is om drie sterren per level te pakken', 20, 69, 50, 'center', 'black');
        this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');
        this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');
        this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');
        this.game.writeTextToCanvas(`Ready ${this.game.getUser().getName()}`, 48, centerX, 450, 'center', 'black');
        this.game.writeTextToCanvas('druk op spatie', 48, centerX, 550, 'center', 'black');
    }
}
//# sourceMappingURL=InstructionScreen.js.map