import Scene from './Scene.js';
import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import WinScreen from './WinScreen.js';
import MuteButton from './MuteButton.js';

export default class Shop extends Scene {
  private keyboard: KeyListener;

  private levelArray: Level;

  private buttons: HTMLElement[];

  private itemPopUps: HTMLElement[];

  private continueGame: boolean;

  private credits: number;

  /**
   * intilize the class shop
   *
   * @param game THE game
   * @param levelArray the array of the levels within
   */
  public constructor(game: Game, levelArray: Level) {
    super(game);
    this.credits = 1;
    this.levelArray = levelArray;
    this.keyboard = new KeyListener();
    this.continueGame = false;
    this.itemPopUps = [];
    this.makingButtons();
  }

  /**
   * makes the buttons
   */
  private makingButtons(): void {
    this.buttons = [];
    const shoplist = ['jumpboost', 'speedboost', 'enemyIncrease', 'enemyBuff'];
    this.buttons.push(document.createElement('item1'));
    this.buttons.push(document.createElement('item2'));
    this.buttons.push(document.createElement('item3'));
    this.buttons.push(document.createElement('item4'));
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

  /**
   * set the position on the right spot in the shop
   */
  private buttonPos() {
    const canvasOffshoot = 10;
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].style.left = `${(window.innerWidth / this.buttons.length) * i + 150 - canvasOffshoot}px`;
    }
  }

  /**
   * checks if you can buy an item
   *
   * @param itemNumber number of the item
   */
  // eslint-disable-next-line class-methods-use-this
  private buy(itemNumber: number): void {
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

  /**
   * if you buy something you will get some text about the item you bought
   *
   * @param itemNumber number of the item
   */
  private makeItemPopUp(itemNumber: number) {
    const canvasOffshoot = 10;
    const itemPopUpText: string[] = [
      'Klaar om op te stijgen!',
      'Speedy gonzales modus is ingeschakeld!',
      'Oei miskoop, koop niks waarvan je niet weet wat eruit komt. Je gokt!', // maybe add enemies when selected
      'De vijanden zijn nu moeilijker om te ontwijken!',
    ];
    this.itemPopUps.push(document.createElement('boughtItem'));
    const currentItem = this.itemPopUps.length - 1;

    document.body.appendChild(this.itemPopUps[currentItem]);
    this.itemPopUps[currentItem].style.position = 'absolute';
    this.itemPopUps[currentItem].style.left = `${(window.innerWidth / this.buttons.length) * itemNumber + 150 - canvasOffshoot}px`;
    this.itemPopUps[currentItem].style.top = `${window.innerHeight * 0.8}px`;
    this.itemPopUps[currentItem].style.fontSize = '20px';
    this.itemPopUps[currentItem].style.maxWidth = `${window.innerWidth / this.buttons.length / 1.3}px`;
    this.itemPopUps[currentItem].style.fontWeight = 'bold';
    this.itemPopUps[currentItem].innerHTML = itemPopUpText[itemNumber];
    this.itemPopUps[currentItem].style.textShadow = '1px 1px 1px white';
  }

  /**
   *update the shop
   *
   * @returns The level
   */
  public update(): Scene {
    if (this.continueGame && this.game.getUser().getLevel() + 1 <= 5) {
      if (MuteButton.muted === false) {
        Game.play(this.game.getUser().getLevel());
      }
      // this.levelArray.splice(0, 1);
      this.game.getUser().increaseLevel();
      this.resetText();
      return this.game.getCurrentLevel();
    } if (this.continueGame) {
      this.resetText();
      return new WinScreen(this.game);
    }
    return null;
  }

  /**
   * resets the text when going to the next level so it isn't visible
   */
  private resetText() {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].innerHTML = '';
    }
    for (let i = 0; i < this.itemPopUps.length; i++) {
      this.itemPopUps[i].innerHTML = '';
    }
  }

  /**
   * input to progress in the shop
   *
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)) {
      this.continueGame = true;
    }
  }

  /**
   * render the shop
   */
  public render(): void {
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
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/shop/SpeedBoost2.png'), (canvas.width / this.buttons.length) * 0 + canvas.width * 0.31, (canvas.height / 1.2) * 0 + canvas.height * 0.42);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/enemies/lootboxenemy.png'), (canvas.width / this.buttons.length) * 0 + canvas.width * 0.57, (canvas.height / 1.2) * 0 + canvas.height * 0.42, 150, 150);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/shop/Bird.png'), (canvas.width / this.buttons.length) * 0 + canvas.width * 0.81, (canvas.height / 1.2) * 0 + canvas.height * 0.42, 150, 150);

    shop.writeTextToCanvas('Speed', 20, (canvas.width / this.buttons.length) * 1 + offLeftSide, canvas.height / 1.4, 'center', 'black');
    shop.writeTextToCanvas('SUPER-WOW-BIG-COOL-OMEGA-GIANT-SUPRISEBOX', 20, (canvas.width / this.buttons.length) * 2 + offLeftSide, canvas.height / 1.4, 'center', 'black');
    shop.writeTextToCanvas('Speedy "E"s', 20, (canvas.width / this.buttons.length) * 3 + offLeftSide, canvas.height / 1.4, 'center', 'black');
  }
}
