import Scene from './Scene.js';
import Game from './Game.js';
import KeyListener from './KeyListener.js';

export default class Shop extends Scene {
  private keyboard: KeyListener;

  private levelArray: any[];

  private buttons: HTMLElement[];

  private continueGame: boolean;

  /**
   * @param game THE game
   * @param levelArray the array of the levels within
   */
  public constructor(game: Game, levelArray: any) {
    super(game);
    this.levelArray = levelArray;
    this.keyboard = new KeyListener();
    this.continueGame = false;
    this.makingButtons();
  }

  private makingButtons(): void {
    this.buttons = [];
    const shoplist = ['jumpboost', 'speedboost', 'w.i.p.', 'score & enemy'];
    this.buttons.push(document.createElement('item1'));
    this.buttons.push(document.createElement('item2'));
    this.buttons.push(document.createElement('item3'));
    this.buttons.push(document.createElement('item4'));
    for (let i = 0; i < this.buttons.length; i++) {
      if (shoplist[i] !== undefined) {
        this.buttons[i].id = shoplist[i];
        console.log(this.buttons[i].id);
      }
    }
    // TODO only the first buy is visible now for some reason, needs to be all
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

  private buttonPos() {
    const canvasOffshoot = 10;
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].style.left = `${(window.innerWidth / this.buttons.length) * i + 150 - canvasOffshoot}px`;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private buy(itemNumber: number): void {
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
      this.buttons[itemNumber].innerHTML = 'hehe';
    }
  }

  /**
   *
   * @returns The level
   */
  public update(): Scene {
    if (this.continueGame && this.game.getUser().getLevel() <= 2) {
      // this.levelArray.splice(0, 1);
      this.game.getUser().increaseLevel();
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].innerHTML = '';
      }
      return this.game.getCurrentLevel();
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

    shop.writeTextToCanvas('SHOP', 90, canvas.width / 2, canvas.height / 5, 'center', 'black');
    shop.writeTextToCanvas('Press enter to leave', 70, canvas.width / 2, canvas.height / 3, 'center', 'black');
    shop.writeTextToCanvas('Jumpboost', 20, (canvas.width / this.buttons.length) * 0 + offLeftSide, canvas.height / 1.5, 'center', 'black');
    // shop.writeTextToCanvas('T', 20, canvas.width / 4, canvas.height / 1.4, 'center', 'black');
    shop.writeTextToCanvas('Speed', 20, (canvas.width / this.buttons.length) * 1 + offLeftSide, canvas.height / 1.5, 'center', 'black');
    // shop.writeTextToCanvas('Y', 20, canvas.width * 0.5, canvas.height / 1.4, 'center', 'black');
    shop.writeTextToCanvas('BIGOMEGAGIANTSUPRISEBOX', 20, (canvas.width / this.buttons.length) * 2 + offLeftSide, canvas.height / 1.5, 'center', 'black');
    // shop.writeTextToCanvas('U', 20, canvas.width * 0.75, canvas.height / 1.4, 'center', 'black');
    shop.writeTextToCanvas('Score&difficulty (w.i.p.)', 20, (canvas.width / this.buttons.length) * 3 + offLeftSide, canvas.height / 1.5, 'center', 'black');
  }
}
