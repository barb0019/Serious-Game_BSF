import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
export default class Shop extends Scene {
    keyboard;
    levelArray;
    buttons;
    continueGame;
    constructor(game, levelArray) {
        super(game);
        this.levelArray = levelArray;
        this.keyboard = new KeyListener();
        this.continueGame = false;
        this.makingButtons();
    }
    makingButtons() {
        this.buttons = [];
        this.buttons.push(document.createElement('buy'));
        document.body.appendChild(this.buttons[0]);
        this.buttons[0].innerHTML = 'Buy';
        this.buttons[0].style.position = 'absolute';
        this.buttons[0].style.left = `${window.innerWidth / 2}px`;
        this.buttons[0].style.top = `${window.innerHeight / 2}px`;
        this.buttons[0].style.fontSize = '48px';
    }
    buy() {
        console.log('item bought');
    }
    update() {
        this.buttons[0].addEventListener('click', this.buy);
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
    }
    render() {
        const { canvas } = this.game;
        const shop = this.game;
        this.game.ctx.clearRect(0, 0, canvas.width, canvas.height);
        shop.writeTextToCanvas('SHOP', 90, canvas.width / 2, canvas.height / 5, 'center', 'black');
        shop.writeTextToCanvas('Press enter to leave', 70, this.game.canvas.width / 2, canvas.height / 3, 'center', 'black');
        shop.writeTextToCanvas('Double jump', 25, canvas.width / 4, canvas.height / 1.5, 'center', 'black');
        shop.writeTextToCanvas('T', 20, canvas.width / 4, canvas.height / 1.4, 'center', 'black');
        shop.writeTextToCanvas('Rocket', 25, canvas.width * 0.5, canvas.height / 1.5, 'center', 'dark black');
        shop.writeTextToCanvas('Y', 20, canvas.width * 0.5, canvas.height / 1.4, 'center', 'dark black');
        shop.writeTextToCanvas('More placeholders', 25, canvas.width * 0.75, canvas.height / 1.5, 'center', 'black');
        shop.writeTextToCanvas('U', 20, canvas.width * 0.75, canvas.height / 1.4, 'center', 'black');
    }
}
//# sourceMappingURL=Shop.js.map