import Game from './Game.js';
import GameItem from './GameItem.js';
import Player from './Player.js';

export default class SpeedBubble  {
  private text:string;

  private yCoordinate:number;

  private xCoordinate:number;

  private player1:Player;

  private player2:Player;

  private game:Game;

  /**
   *
   * @param game
   * @param text
   * @param yCoordinate
   * @param xCoordinate
   */
  public constructor(game:Game, text:string, yCoordinate:number,
     xCoordinate:number,player1:Player,player2:Player) {
    this.game = game;
    this.player1 = player1;
    this.player2 = player2;
    this.text = text;
    this.yCoordinate = yCoordinate;
    this.xCoordinate = xCoordinate;
  }

  /**
   * render
   */
  public render(): void {
    const text =document.getElementById('textarea');
    text.innerHTML= 'test';
    text.style.position = 'center';
    this.game.writeTextToCanvas(this.text, 39, this.yCoordinate, this.xCoordinate, 'center', 'black');
  }
}
