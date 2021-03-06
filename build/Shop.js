import Scene from './Scene.js';
import Game from './Game.js';
import KeyListener from './KeyListener.js';
import WinScreen from './WinScreen.js';
import MuteButton from './MuteButton.js';
export default class Shop extends Scene {
    keyboard;
    levelArray;
    buttons;
    itemPopUps;
    continueGame;
    credits;
    constructor(game, levelArray) {
        super(game);
        this.credits = 1;
        this.levelArray = levelArray;
        this.keyboard = new KeyListener();
        this.continueGame = false;
        this.itemPopUps = [];
        this.makingButtons();
    }
    makingButtons() {
        this.buttons = [];
        const shoplist = ['jumpboost', 'speedboost', 'badSuprisebox', 'enemyBuff', 'skin'];
        this.buttons.push(document.createElement('item1'));
        this.buttons.push(document.createElement('item2'));
        this.buttons.push(document.createElement('item3'));
        this.buttons.push(document.createElement('item4'));
        this.buttons.push(document.createElement('item5'));
        for (let i = 0; i < this.buttons.length; i++) {
            if (shoplist[i] !== undefined) {
                this.buttons[i].id = shoplist[i];
            }
        }
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].style.position = 'absolute';
            this.buttons[i].innerHTML = 'Koop';
            this.buttons[i].style.top = `${window.innerHeight / 1.4 + 10}px`;
            this.buttons[i].style.fontSize = '20px';
            this.buttons[i].style.fontWeight = 'bold';
            this.buttons[i].style.backgroundColor = 'yellow';
            this.buttons[i].addEventListener('click', () => {
                this.buy(i);
            });
            for (let j = 0; j < this.game.getBoughtItems().length; j++) {
                if (i === this.game.getBoughtItems()[j]) {
                    this.buttons[i].innerHTML = 'Gekocht!';
                }
            }
            document.body.appendChild(this.buttons[i]);
        }
        this.buttonPos();
    }
    buttonPos() {
        const canvasOffshoot = 10;
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].style.left = `${(window.innerWidth / this.buttons.length) * i + 150 - canvasOffshoot}px`;
        }
    }
    buy(itemNumber) {
        if (this.credits <= 0) {
            return;
        }
        for (let i = 0; i < this.buttons.length; i++) {
            if (itemNumber === this.game.getBoughtItems()[i]) {
                return;
            }
        }
        this.game.setBoughtItems(itemNumber);
        this.credits -= 1;
        this.buttons[itemNumber].innerHTML = 'Gekocht!';
        this.makeItemPopUp(itemNumber);
        if (itemNumber === 2) {
            this.buttons[itemNumber].innerHTML = 'hehe';
        }
    }
    makeItemPopUp(itemNumber) {
        const canvasOffshoot = 10;
        const itemPopUpText = [
            'Klaar om op te stijgen!',
            'Speedy gonzales modus is ingeschakeld!',
            'Oei miskoop, koop niks waarvan je niet weet wat eruit komt. Je gokt!',
            'De vijanden zijn nu moeilijker om te ontwijken!',
            'Skins zijn nutteloos niet kopen tenzij je het echt wil',
        ];
        this.itemPopUps.push(document.createElement('boughtItem'));
        const currentItem = this.itemPopUps.length - 1;
        document.body.appendChild(this.itemPopUps[currentItem]);
        this.itemPopUps[currentItem].style.position = 'absolute';
        this.itemPopUps[currentItem].style.left = `${(window.innerWidth / this.buttons.length) * itemNumber + this.game.canvas.width * 0.09 - canvasOffshoot}px`;
        this.itemPopUps[currentItem].style.top = `${window.innerHeight * 0.8}px`;
        this.itemPopUps[currentItem].style.fontSize = '20px';
        this.itemPopUps[currentItem].style.maxWidth = `${window.innerWidth / this.buttons.length / 1.3}px`;
        this.itemPopUps[currentItem].style.fontWeight = 'bold';
        this.itemPopUps[currentItem].innerHTML = itemPopUpText[itemNumber];
        this.itemPopUps[currentItem].style.textShadow = '1px 1px 1px white';
    }
    update() {
        if (this.continueGame && this.game.getUser().getLevel() + 1 <= 5) {
            if (MuteButton.muted === false) {
                Game.play(this.game.getUser().getLevel());
            }
            this.game.getUser().increaseLevel();
            this.resetText();
            return this.game.getCurrentLevel();
        }
        if (this.continueGame) {
            this.resetText();
            return new WinScreen(this.game);
        }
        return null;
    }
    resetText() {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].innerHTML = '';
        }
        for (let i = 0; i < this.itemPopUps.length; i++) {
            this.itemPopUps[i].innerHTML = '';
        }
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)) {
            this.continueGame = true;
        }
    }
    render() {
        const { canvas } = this.game;
        const offLeftSide = 150;
        const shop = this.game;
        this.game.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.game.ctx.drawImage(Game.loadNewImage('https://e7.pngegg.com/pngimages/676/208/png-clipart-wooden-background-wooden-table-wooden-background.png'), 0, 0, canvas.width, canvas.height);
        shop.writeTextToCanvas('SHOP', 90, canvas.width / 2, canvas.height / 5.1, 'center', 'black');
        shop.writeTextToCanvas('Druk op "enter" om de shop te verlaten', 70, canvas.width / 2, canvas.height / 3.4, 'center', 'black');
        shop.writeTextToCanvas(`Credits: ${this.credits}`, 50, canvas.width / 2, canvas.height / 2.5, 'center', 'black');
        shop.writeTextToCanvas('Jumpboost', 20, (canvas.width / this.buttons.length) * 0 + offLeftSide, canvas.height / 1.4, 'center', 'black');
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/shop/jumpBoost.png'), (canvas.width / this.buttons.length) * 0 + canvas.width * 0.05, (canvas.height / 1.2) * 0 + canvas.height * 0.42);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/shop/SpeedBoost2.png'), (canvas.width / this.buttons.length) * 1 + canvas.width * 0.05, (canvas.height / 1.2) * 0 + canvas.height * 0.42);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/enemies/lootboxenemy.png'), (canvas.width / this.buttons.length) * 2 + canvas.width * 0.05, (canvas.height / 1.2) * 0 + canvas.height * 0.42, 150, 150);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/shop/Bird.png'), (canvas.width / this.buttons.length) * 3 + canvas.width * 0.05, (canvas.height / 1.2) * 0 + canvas.height * 0.42, 150, 150);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/player/SkinPurple.png'), (canvas.width / this.buttons.length) * 4 + canvas.width * 0.05, (canvas.height / 1.2) * 0 + canvas.height * 0.42, 150, 150);
        shop.writeTextToCanvas('Speed', 20, (canvas.width / this.buttons.length) * 1 + offLeftSide, canvas.height / 1.4, 'center', 'black');
        shop.writeTextToCanvas('SUPER-COOL-OMEGA-GIANT-SUPRISEBOX', 20, (canvas.width / this.buttons.length) * 2 + offLeftSide, canvas.height / 1.4, 'center', 'black');
        shop.writeTextToCanvas('Speedy "E"s', 20, (canvas.width / this.buttons.length) * 3 + offLeftSide + canvas.width * 0.01, canvas.height / 1.4, 'center', 'black');
        shop.writeTextToCanvas('Skin', 20, (canvas.width / this.buttons.length) * 4 + offLeftSide, canvas.height / 1.4, 'center', 'black');
    }
}
//# sourceMappingURL=Shop.js.map