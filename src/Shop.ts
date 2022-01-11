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
  public constructor(game: Game, levelArray: any[]) {
    super(game);
    this.levelArray = levelArray;
    this.keyboard = new KeyListener();
    this.continueGame = false;
    this.makingButtons();
  }

  private makingButtons(): void {
    this.buttons = [];
    this.buttons.push(document.createElement('BUTTON'));
    document.body.appendChild(this.buttons[0]);
    this.buttons[0].innerHTML = 'Buy';
    this.buttons[0].style.position = 'absolute';
    this.buttons[0].style.left = '100px';
    this.buttons[0].style.fontSize = '100px';
  }

  // eslint-disable-next-line class-methods-use-this
  private buy(): void {
    console.log('item bought');
  }

  /**
   * @returns The level
   */
  public update(): Scene {
    this.buttons[0].addEventListener('click', this.buy);
    if (this.continueGame && this.game.getUser().getLevel() < this.levelArray.length) {
      // this.levelArray.splice(0, 1);
      this.game.getUser().increaseLevel();
      return this.levelArray[this.game.getUser().getLevel() - 1];
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
    shop.writeTextToCanvas(this.buttons[0].innerHTML, 30, canvas.width * 0.5, canvas.height * 0.5, 'center', 'black');
  }
}
