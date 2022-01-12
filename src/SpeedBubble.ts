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
   *
   * @param canvas
   */
  public render(canvas:HTMLCanvasElement): void {
<<<<<<< Updated upstream
    this.game.writeTextToCanvas(this.text, 20, this.yPos+this.img.width/2+20, this.xPos+this.img.height-10, 'center', 'black');
=======
    this.game.writeTextToCanvas(this.text, 39,this.yPos+this.img.width/2,this.xPos-this.img.height/2 , 'center', 'black');
>>>>>>> Stashed changes
  }

  /**
   * @param ctx ctx
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.yPos, this.xPos, this.width, this.height);
  }
}
