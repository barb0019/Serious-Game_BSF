import GameItem from './GameItem.js';

export default class PressurePlate extends GameItem {

  public constructor(xpos:number, yPos:number) {
    super('./assets/img/titled_yellow_power_icon.png', xpos, yPos, 'pressure plate');
  }
}
