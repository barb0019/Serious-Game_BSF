import Game from './Game.js';
import Player from './Player.js';
import GameItem from './GameItem.js';

export default class SpeedBubble extends GameItem {
  private text:string;

  private player1:Player;

  private player2:Player;

  private game:Game;

  private width:number;

  private height:number;

  /**
   *
   * @param game the game of the game
   * @param text the text of the speedbubble
   * @param yCoordinate y coodinate of the speedbubble
   * @param xCoordinate x coordinate
   * @param player1 player 1
   * @param player2 player 2
   * @param width
   * @param height
   */
  public constructor(game:Game, text:string, yCoordinate:number,
    xCoordinate:number, player1:Player, player2:Player, width:number, height:number) {
    super('./assets/img/textcloud.png', xCoordinate, yCoordinate, 'speedbubble');
    this.game = game;
    this.player1 = player1;
    this.player2 = player2;
    this.text = text;
    this.width = width;
    this.height = height;
  }

  /**
   * render
   */
  public render(canvas:HTMLCanvasElement): void {
    this.game.writeTextToCanvas(this.text, 39,canvas.height-this.img.height/2 ,canvas.height-this.img.height, 'center', 'black');
  } 

  /**
   * @param ctx ctx
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.yPos, this.xPos, this.width, this.height);
  }
}
