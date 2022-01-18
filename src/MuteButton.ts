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
    this.makeButton();
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
      this.muteorUnMute();
      muteButton.src = './assets/img/UnMute.png';
      muteButton.style.position = 'absolute';
      muteButton.style.top = '0px';
      muteButton.style.right = '0px';
      muteButton.innerHTML = 'verminkte pinguin';
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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // eslint-disable-next-line class-methods-use-this
  public muteorUnMute():void {
    Game.pause();
  }
}
