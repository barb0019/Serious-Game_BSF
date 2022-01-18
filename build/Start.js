import Game from './Game.js';
import InstructionScreen from './InstructionScreen.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class Start extends Scene {
    shouldStart;
    keyboard;
    levelsArray;
    instructionscreen;
    constructor(game) {
        super(game);
        game.reset();
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.instructionscreen = false;
        console.log(this.game.getCurrentLevel());
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            this.shouldStart = true;
            Game.play();
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_W)) {
            this.instructionscreen = true;
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
        if (this.instructionscreen) {
            if (this.game.getCurrentLevel().hasWon()) {
                this.levelsArray.splice(0, 1);
            }
            return new InstructionScreen(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');
        this.game.writeTextToCanvas(`Ready ${this.game.getUser().getName()}`, 48, centerX, 450, 'center', 'black');
        this.game.writeTextToCanvas("Type 'space' om te beginnen", 48, centerX, 550, 'center', 'black');
        this.game.writeTextToCanvas("Type 'w' om naar uitleg te gaan", 48, centerX, 650, 'center', 'black');
    }
}
//# sourceMappingURL=Start.js.map