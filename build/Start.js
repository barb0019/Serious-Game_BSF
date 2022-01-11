import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import Scene from './Scene.js';
export default class Start extends Scene {
    shouldStart;
    keyboard;
    levelsArray;
    constructor(game) {
        super(game);
        game.reset();
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.levelsArray = [new Level1(game), new Level2(game)];
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            this.shouldStart = true;
            Game.play();
        }
    }
    update() {
        console.log('test with HAM');
        if (this.shouldStart) {
            console.log('test');
            if (this.levelsArray[this.game.getUser().getLevel() - 1].hasWon()) {
                this.levelsArray.splice(0, 1);
                this.levelsArray.hasWon = false;
            }
            return this.levelsArray[this.game.getUser().getLevel() - 1];
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas('Monsters and Legends', 128, centerX, 250, 'center', 'black');
        this.game.writeTextToCanvas(`Ready ${this.game.getUser().getName()}`, 48, centerX, 450, 'center', 'black');
        this.game.writeTextToCanvas("Type 'space' to start", 48, centerX, 550, 'center', 'black');
    }
}
//# sourceMappingURL=Start.js.map