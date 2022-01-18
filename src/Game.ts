import GameLoop from './GameLoop.js';
import Level from './Level.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import Start from './Start.js';
import UserData from './UserData.js';
import Level3 from './Level3.js';
import Level4 from './Level4.js';
import MuteButton from './MuteButton.js';

export default class Game {
  // Necessary canvas attributes
  public readonly canvas: HTMLCanvasElement;

  public readonly ctx: CanvasRenderingContext2D;

  private user: UserData;

  private gameLoop: GameLoop;

  static music:HTMLAudioElement;

  private boughtItems: number[];

   private button:MuteButton;

  /**
   * Initialize the game
   *
   * @param canvas - The canvas element that the game
   * should be rendered upon
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    Game.music = new Audio('./assets/game-music-7408.mp3');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.boughtItems = [];

    // Start the game cycle
    this.gameLoop = new GameLoop();
    this.gameLoop.start(new Start(this));

    const { width } = this.canvas;
    const { height } = this.canvas;

    this.button = new MuteButton(width * 0.75, height * 0.56, 'button');

  }

  /**
   * Sets which items are bought to be saved for later
   *
   * @param itemNumber The number of the item, each number represents a different item
   */
  public setBoughtItems(itemNumber: number): void {
    this.boughtItems.push(itemNumber);
  }

  /**
   * Get an array of the items that have been bought represented by their number
   *
   * @returns an array of which items have been bought by their item number
   */
  public getBoughtItems(): number[] {
    return this.boughtItems;
  }

  /**
   * getUser
   *
   * @returns the user data
   */
  public getUser(): UserData {
    return this.user;
  }

  /**
   * Resets the game to the starting state.
   */
  public reset(): void {
    this.user = new UserData();
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param fontSize - Font size in pixels
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param alignment - Where to align the text
   * @param color - The color of the text
   */
  public writeTextToCanvas(
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = 'center',
    color: string = 'white',
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Method to load an image
   *
   * @param source the source
   * @returns HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Returns a random number between min and max
   *
   * @param min - lower boundary
   * @param max - upper boundary
   * @returns a random number between min and max
   */
  public static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  /**
   * plays the music
   */
  static play():void {
    this.music.play();
    this.music.loop = true;
    this.music.muted = false;
  }

  /**
   * pause the music
   */
  static pause():void {
    this.music.muted = true;
    this.music.pause();
  }

  /**
   * Returns a Scene object that corresponds with the current level
   * of the user.
   *
   * @returns The current level scene
   */
  public getCurrentLevel(): Level {
    switch (this.user.getLevel()) {
      case 1: return new Level4(this);
      case 2: return new Level2(this);
      case 3: return new Level3(this);
      case 4: return new Level4(this);
      default: return null;
    }
  }
}
