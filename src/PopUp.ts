import Game from './Game.js';
import Player from './Player.js';

export default class PopUp {
  private game: Game;

  private player: Player[];

  private xPos: number;

  private yPos: number;

  private alerted: boolean;

  private text: string;

  /**
   * @param xPos
   * @param yPos
   * @param text
   * @param game
   * @param player
   */
  public constructor(xPos: number, yPos: number, text: string, game: Game, player: Player[]) {
    this.game = game;
    this.player = player;
    this.xPos = xPos;
    this.yPos = yPos;
    this.text = text;
    this.alerted = false;
    this.collidesPopUpWithPlayer();
  }

  /**
   * Checks if the player is near the popUp and shows it if it wasn't shown before
   *
   */
  public collidesPopUpWithPlayer(): void {
    let alertOnce = false;
    if (this.alerted === true) {
      return;
    }
    for (let i = 0; i < this.player.length; i++) {
      if (this.xPos < this.player[i].getXPos()
      + this.player[i].getImageWidth() + this.player[i].getXVel()
      && this.xPos + window.innerWidth * 0.1 > this.player[i].getXPos() - this.player[i].getXVel()
      && this.yPos < this.player[i].getYPos() + this.player[i].getImageHeight()
      && this.yPos + window.innerHeight * 0.1 > this.player[i].getYPos()) {
        this.alerted = true;
        alertOnce = true;
      }
    }
    if (alertOnce === true) {
      window.alert(this.text);
    }
  }
}
