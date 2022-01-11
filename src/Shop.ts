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
    this.buttons.push(document.createElement('item1'));
    this.buttons.push(document.createElement('item2'));
    this.buttons.push(document.createElement('item3'));
    // TODO only the first buy is visible now for some reason, needs to be all
    for (let i = 0; i < this.buttons.length; i++) {
      console.log(this.buttons);
      this.buttons[i].innerHTML = 'Buy';
      this.buttons[i].style.position = 'absolute';
      this.buttons[i].style.top = `${window.innerHeight / 1.5}px`;
      this.buttons[i].style.fontSize = '20px';
      this.buttons[i].addEventListener('click', () => {
        this.buy(i);
      });
      document.body.appendChild(this.buttons[i]);
    }
    this.buttons[0].style.left = `${50}px`;
    this.buttons[1].style.left = `${400}`;
    this.buttons[2].style.left = `${750}`;
  }

  // eslint-disable-next-line class-methods-use-this
  private buy(i: number): void {
    console.log(`item bought, number ${i}`);
  }

  /**
   * x
   *
   * @returns The level
   */
  public update(): Scene {
    if (this.continueGame && this.game.getUser().getLevel() < this.levelArray.length) {
      // this.levelArray.splice(0, 1);
      this.game.getUser().increaseLevel();
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].innerHTML = '';
      }
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
  }
}
