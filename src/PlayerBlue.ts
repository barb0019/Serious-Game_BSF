import Game from './Game.js';
import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';

export default class PlayerBlue extends Player {
  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   * @param game
   */
  public constructor(maxX: number, maxY: number, game: Game) {
    super('./assets/img/BlueKid2.png', maxX - 76, maxY - 92, 'blue', game);
    this.keyboard = new KeyListener();
  }

  /**
   *
   * @param other the other GameItem
   * @returns true if this object collides with the specified other object
   */
  public collidesWith(other: GameItem): boolean {
    // console.log('collision');
    return this.xPos < other.getXPos() + other.getImageWidth()
      && this.xPos + this.img.width > other.getXPos()
      && this.yPos < other.getYPos() + other.getImageHeight()
      && this.yPos + this.img.height > other.getYPos()
      && other.getType() !== 'blue';
  }
}
