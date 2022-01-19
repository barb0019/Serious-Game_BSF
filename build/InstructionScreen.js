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
        this.game.ctx.drawImage(Game.loadNewImage('https://media1.thehungryjpeg.com/thumbs2/ori_70842_a6fd8ffd7deeb1c56dbcdd154755b5105b7de5e7_seamless-abstract-background-png-jpg.jpg'), 0, 0, width, height);
        this.game.writeTextToCanvas('uitleg instructies', 128, centerX, height * 0.15, 'center', 'black');
        this.game.writeTextToCanvas('het doel van het spel is om drie sterren per level te pakken en samen door de deur te gaan', height * 0.027, width * 0.32, height * 0.28, 'center', 'black');
        this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.18, height * 0.23, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/star.png'), width * 0.2, height * 0.2);
        this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.24, height * 0.23, 'center', 'black');
        this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.18, height * 0.32, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/DoubleDoor0.png'), width * 0.19, height * 0.29);
        this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.24, height * 0.32, 'center', 'black');
        this.game.writeTextToCanvas('op je pad vind je vijanden probeer deze ten alle tijden te vermijden!', height * 0.027, width * 0.80, height * 0.26, 'center', 'black');
        this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.73, height * 0.32, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/blue.png'), width * 0.75, height * 0.29);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/packred.png'), width * 0.80, height * 0.29);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/packblue.png'), width * 0.85, height * 0.29);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/red.png'), width * 0.90, height * 0.29);
        this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.94, height * 0.32, 'center', 'black');
        this.game.writeTextToCanvas('deze vijanden zijn in echte games geldeenheden  of lootboxen', height * 0.027, width * 0.79, height * 0.50, 'center', 'black');
        this.game.writeTextToCanvas('je mag alleen de vijanden raken als je dezelfde kleur hebt als deze vijand', height * 0.027, width * 0.76, height * 0.60, 'center', 'black');
        this.game.writeTextToCanvas('➡️', height * 0.027, width * 0.82, height * 0.69, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/BlueKidLookRight.png'), width * 0.79, height * 0.65);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/packred.png'), width * 0.70, height * 0.65);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/packblue.png'), width * 0.83, height * 0.65);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/RedKid2.png'), width * 0.74, height * 0.65);
        this.game.writeTextToCanvas('⬅️', height * 0.027, width * 0.77, height * 0.69, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/BlueKid2.png'), width * 0.20, height * 0.45);
        this.game.writeTextToCanvas('je bestuurt het blauwe poppetje met', height * 0.027, width * 0.23, height * 0.57, 'center', 'black');
        this.game.writeTextToCanvas('W', height * 0.035, width * 0.21, height * 0.60, 'center', 'blue');
        this.game.writeTextToCanvas('A    D', height * 0.035, width * 0.21, height * 0.64, 'center', 'blue');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/RedKid2.png'), width * 0.20, height * 0.67);
        this.game.writeTextToCanvas('je bestuurt het rode poppetje met', height * 0.027, width * 0.23, height * 0.79, 'center', 'black');
        this.game.writeTextToCanvas('⬆', height * 0.035, width * 0.21, height * 0.82, 'center', 'black');
        this.game.writeTextToCanvas('⬅  ➡', height * 0.035, width * 0.21, height * 0.86, 'center', 'black');
        this.game.writeTextToCanvas('druk op ➡️', height * 0.027, width * 0.60, height * 0.82, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/UnMuteV2.png'), width * 0.65, height * 0.77, 50, 50);
        this.game.writeTextToCanvas('rechtsboven in om het geluid te dempen', height * 0.027, width * 0.82, height * 0.82, 'center', 'black');
        this.game.writeTextToCanvas('druk op ➡️', height * 0.027, width * 0.60, height * 0.88, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/UnMute.png'), width * 0.65, height * 0.85, 50, 50);
        this.game.writeTextToCanvas('rechtsboven in om het geluid weer aan te zetten', height * 0.027, width * 0.82, height * 0.88, 'center', 'black');
        this.game.writeTextToCanvas('druk op spatie om verder te gaan', height * 0.040, width / 2 - 150, height * 0.88, 'center', 'red');
    }
}
//# sourceMappingURL=InstructionScreen.js.map