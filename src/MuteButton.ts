import Game from './Game.js';
import InteractingItems from './InteractingItems.js';
import Player from './Player.js';

export default class MuteButton extends InteractingItems {
  static muted:boolean;

  private game:Game;

  /**
   * intilize the class MuteButton
   *
   *@param game the game
   * @param xPos x position of the mute button
   * @param yPos y position of the door
   * @param type type of the door
   */
  public constructor(xPos: number, yPos: number, type:string, game:Game) {
    super(xPos, yPos, type, './assets/img/UnMute.png');
    this.makeButton();
    MuteButton.muted = false;
    this.game = game;
  }

  /**
   * makes the mute button
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
      if (MuteButton.muted === true) {
        muteButton.src = './assets/img/UnMuteV2.png';
        MuteButton.muted = false;
        Game.play(this.game.getUser().getLevel() - 1);
      } else {
        Game.pause(this.game.getUser().getLevel() - 1);
        muteButton.src = './assets/img/UnMute.png';
        MuteButton.muted = true;
      }
    });
  }

  /**
   * draw the mute Button
   *
   */
  // eslint-disable-next-line class-methods-use-this
  public draw(): void {
  }
}
