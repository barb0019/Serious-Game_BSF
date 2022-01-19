import Scene from './Scene.js';
import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import WinScreen from './WinScreen.js';

export default class Shop extends Scene {
  private keyboard: KeyListener;

  private levelArray: Level;

  private buttons: HTMLElement[];

  private itemPopUps: HTMLElement[];

  private continueGame: boolean;

  private credits: number;

  /**
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
      this.buttons[i].innerHTML = 'Buy';
      this.buttons[i].style.top = `${window.innerHeight / 1.4 + 10}px`;
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

  private buttonPos() {
    const canvasOffshoot = 10;
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].style.left = `${(window.innerWidth / this.buttons.length) * i + 150 - canvasOffshoot}px`;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private buy(itemNumber: number): void {
    if (this.credits <= 0) {
      console.log('not enough credits');
      return;
    }
    for (let i = 0; i < this.buttons.length; i++) {
      if (itemNumber === this.game.getBoughtItems()[i]) {
        console.log(`item number ${itemNumber} has already been bought`);
        return;
      }
    }
    console.log(`item bought, number ${itemNumber}`);
    this.game.setBoughtItems(itemNumber);
    this.credits -= 1;
    this.buttons[itemNumber].innerHTML = 'Bought';
    this.makeItemPopUp(itemNumber);
    if (itemNumber === 2) {
      this.buttons[itemNumber].innerHTML = 'hehe';
    }
  }

  private makeItemPopUp(itemNumber: number) {
    const canvasOffshoot = 10;
    const itemPopUpText: string[] = [
      'Klaar om op te stijgen!',
      'Speedy gonzales modus is ingeschakeld!',
      'Oei miskoop, koop niks waarvan je niet weet wat eruit komt. Je gokt!', // maybe add enemies when selected
      'De vijanden zijn nu moeilijker om te verslaan!',
    ];
    this.itemPopUps.push(document.createElement('boughtItem'));
    const currentItem = this.itemPopUps.length - 1;

    document.body.appendChild(this.itemPopUps[currentItem]);
    this.itemPopUps[currentItem].style.position = 'absolute';
    this.itemPopUps[currentItem].style.left = `${(window.innerWidth / this.buttons.length) * itemNumber + 150 - canvasOffshoot}px`;
    this.itemPopUps[currentItem].style.top = `${window.innerHeight / 2 / 1.1}px`;
    this.itemPopUps[currentItem].style.fontSize = '20px';
    this.itemPopUps[currentItem].style.maxWidth = `${window.innerWidth / this.buttons.length / 1.3}px`;
    // this.itemPopUps[currentItem].style.backgroundImage = 'url(https://media1.thehungryjpeg.com/thumbs2/ori_70842_a6fd8ffd7deeb1c56dbcdd154755b5105b7de5e7_seamless-abstract-background-png-jpg.jpg)';

    this.itemPopUps[currentItem].innerHTML = itemPopUpText[itemNumber];
  }

  /**
   *
   * @returns The level
   */
  public update(): Scene {
    if (this.continueGame && this.game.getUser().getLevel() <= 4) {
      // this.levelArray.splice(0, 1);
      this.game.getUser().increaseLevel();
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].innerHTML = '';
      }
      for (let i = 0; i < this.itemPopUps.length; i++) {
        this.itemPopUps[i].innerHTML = '';
      }
      return this.game.getCurrentLevel();
    } if (this.continueGame && this.game.getUser().getLevel() < 4) {
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].innerHTML = '';
      }
      for (let i = 0; i < this.itemPopUps.length; i++) {
        this.itemPopUps[i].innerHTML = '';
      }
      return new WinScreen(this.game);
    }
    return null;
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
   *
   */
  public render(): void {
    const { canvas } = this.game;
    const offLeftSide = 150;
    const shop = this.game;
    this.game.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.game.ctx.drawImage(Game.loadNewImage('https://e7.pngegg.com/pngimages/676/208/png-clipart-wooden-background-wooden-table-wooden-background.png'), 0, 0, canvas.width, canvas.height);
    shop.writeTextToCanvas('SHOP', 90, canvas.width / 2, canvas.height / 5.1, 'center', 'black');
    shop.writeTextToCanvas('Press enter to leave', 70, canvas.width / 2, canvas.height / 3.4, 'center', 'black');
    shop.writeTextToCanvas(`Credits: ${this.credits}`, 50, canvas.width / 2, canvas.height / 2.5, 'center', 'black');
    shop.writeTextToCanvas('Jumpboost', 20, (canvas.width / this.buttons.length) * 0 + offLeftSide, canvas.height / 1.4, 'center', 'black');
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/jumpBoost.png'), (canvas.width / this.buttons.length) * 0 + 65, (canvas.height / 1.2) * 0 + 200);
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/SpeedBoost2.png'), (canvas.width / this.buttons.length) * 0 + 400, (canvas.height / 1.2) * 0 + 200);

    // shop.writeTextToCanvas('T', 20, canvas.width / 4, canvas.height / 1.4, 'center', 'black');
    shop.writeTextToCanvas('Speed', 20, (canvas.width / this.buttons.length) * 1 + offLeftSide, canvas.height / 1.4, 'center', 'black');
    // shop.writeTextToCanvas('Y', 20, canvas.width * 0.5, canvas.height / 1.4, 'center', 'black');
    shop.writeTextToCanvas('BIGOMEGAGIANTSUPRISEBOX', 20, (canvas.width / this.buttons.length) * 2 + offLeftSide, canvas.height / 1.4, 'center', 'black');
    // shop.writeTextToCanvas('U', 20, canvas.width * 0.75, canvas.height / 1.4, 'center', 'black');
    shop.writeTextToCanvas('Score&difficulty (w.i.p.)', 20, (canvas.width / this.buttons.length) * 3 + offLeftSide, canvas.height / 1.4, 'center', 'black');
  }
}
