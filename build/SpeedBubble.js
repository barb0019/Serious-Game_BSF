import Enemies from './Enemies.js';
export default class SpeedBubble extends Enemies {
    text;
    xCoordinate;
    yCoordinate;
    width;
    height;
    constructor(game, text, yCoordinate, xCoordinate, width, height) {
        super('./assets/img/interactingitems/textcloud.png', xCoordinate, yCoordinate, 0, 'speedbubble', true, game);
        this.text = text;
        this.width = width;
        this.height = height;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }
    render() {
        this.game.writeTextToCanvas(this.text, 15, this.xCoordinate + this.getImageWidth() / 2, this.yCoordinate + this.getImageHeight() / 2, 'center', 'white');
    }
}
//# sourceMappingURL=SpeedBubble.js.map