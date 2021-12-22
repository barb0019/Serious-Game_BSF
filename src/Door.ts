import GameItem from './GameItem.js';

export default class Door extends GameItem {


    /**
     *
     * @param imagesrc
     * @param xPos
     * @param yPos
     */
  public constructor(xPos: number, yPos: number, type:string) {
super(`./assets/img/${type}.png`, xPos, yPos);
  }


}
