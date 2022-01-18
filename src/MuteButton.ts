import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
import Player from './Player.js';

export default class MuteButton extends InteractingItems {
  private muted:boolean;

  /**
   *
   * @param xPos x position of the mute button
   * @param yPos y position of the door
   * @param type type of the door
   */
  public constructor(xPos: number, yPos: number, type:string) {
    super(xPos, yPos, type, './assets/img/UnMute.png');
    this.makeButton();
    this.muted = false;
  }

  /**
   *
   */
  public makeButton():void {
    const muteButton = document.createElement('img');
    muteButton.style.position = 'absolute';
    muteButton.style.top = '0px';
    muteButton.style.right = '0px';
    muteButton.src = './assets/img/UnMuteV2.png';
    muteButton.width = 50;
    document.body.append(muteButton);
    muteButton.addEventListener('click', () => {
      if (this.muted === true) {
        muteButton.src = './assets/img/UnMuteV2.png';
        this.muted = false;
        Game.play();
      } else {
        Game.pause();
        muteButton.src = './assets/img/UnMute.png';
        this.muted = true;
      }
    });
  }

  /**
   * @param ctx ctx
   * @param player the array of players
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(Game.loadNewImage('./assets/img/UnMute.png'), this.xPos, this.yPos, 60, 32);
  }
}
