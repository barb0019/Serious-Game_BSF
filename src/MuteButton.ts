/* eslint-disable space-before-blocks */
import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
import Player from './Player.js';

export default class MuteButton extends InteractingItems {
  /**
   *
   * @param xPos x position of the mute button
   * @param yPos y position of the door
   * @param type type of the door
   */
  public constructor(xPos: number, yPos: number, type:string) {
    super(xPos, yPos, type, './assets/img/UnMute.png');
  }

  /**
   *
   */
  public makeButton():void{
    const muteButton = document.createElement('muteButton');
    muteButton.addEventListener('click', () => {
      this.MuteorUnMute();
    });
  }

  /**
   * @param ctx ctx
   * @param player the array of players
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(Game.loadNewImage('./assets/img/UnMute.png'), this.xPos, this.yPos, 60, 32);
  }

  /**
   *
   */
  public MuteorUnMute():void {
    throw new Error('Method not implemented.');
  }
}
