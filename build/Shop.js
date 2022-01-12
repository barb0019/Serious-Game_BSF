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
        this.buttons.push(document.createElement('item1'));
        this.buttons.push(document.createElement('item2'));
        this.buttons.push(document.createElement('item3'));
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].style.position = 'absolute';
            this.buttons[i].innerHTML = 'Buy';
            this.buttons[i].style.top = `${window.innerHeight / 1.5 + 10}px`;
            this.buttons[i].style.fontSize = '20px';
            this.buttons[i].addEventListener('click', () => {
                this.buy(i);
            });
            for (let j = 0; j < this.game.getBoughtItems().length; j++) {
                if (i === this.game.getBoughtItems()[j]) {
                    this.buttons[i].innerHTML = 'Bought';
                }
            }
            document.body.appendChild(this.buttons[i]);
        }
        this.buttonPos();
    }
    buttonPos() {
        const canvasOffshoot = 10;
        this.buttons[0].style.left = `${window.innerWidth * 0.25 - canvasOffshoot}px`;
        this.buttons[1].style.left = `${window.innerWidth * 0.5 - canvasOffshoot}px`;
        this.buttons[2].style.left = `${window.innerWidth * 0.75 - canvasOffshoot}px`;
    }
    buy(itemNumber) {
        for (let i = 0; i < this.buttons.length; i++) {
            if (itemNumber === this.game.getBoughtItems()[i]) {
                console.log(`item number ${itemNumber} has already been bought`);
                return;
            }
        }
        console.log(`item bought, number ${itemNumber}`);
        this.game.setBoughtItems(itemNumber);
        this.buttons[itemNumber].innerHTML = 'Bought';
        if (itemNumber === 2) {
            this.buttons[itemNumber].innerHTML = 'YOOOOOOOOOOOOOOOOOOOOO';
        }
    }
    update() {
        if (this.continueGame && this.game.getUser().getLevel() <= 2) {
            this.game.getUser().increaseLevel();
            for (let i = 0; i < this.buttons.length; i++) {
                this.buttons[i].innerHTML = '';
            }
            return this.game.getCurrentLevel();
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
        shop.writeTextToCanvas('Jumpboost', 25, canvas.width / 4, canvas.height / 1.5, 'center', 'black');
        shop.writeTextToCanvas('Speed', 25, canvas.width * 0.5, canvas.height / 1.5, 'center', 'black');
        shop.writeTextToCanvas('BIG OMEGA GIANT SUPRISE BOX YEEEAH', 25, canvas.width * 0.75, canvas.height / 1.5, 'center', 'black');
    }
}
//# sourceMappingURL=Shop.js.map