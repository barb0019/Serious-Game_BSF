import Enemies from './Enemies.js';
export default class SpeedBubble extends Enemies {
    text;
    xCoordinate;
    yCoordinate;
    width;
    height;
    constructor(game, text, yCoordinate, xCoordinate, width, height) {
        super('./assets/img/textcloud.png', xCoordinate, yCoordinate, 0, 'speedbubble', true, game);
        this.text = text;
        this.width = width;
        this.height = height;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }
<<<<<<< HEAD
    render() {
        this.game.writeTextToCanvas(this.text, 39, this.xCoordinate + this.getImageWidth() / 2, this.yCoordinate + this.getImageHeight() / 2, 'center', 'black');
=======
    render(canvas) {
        this.game.writeTextToCanvas(this.text, 15, this.xCoordinate + this.getImageWidth() / 2, this.yCoordinate + this.getImageHeight() / 2, 'center', 'blue');
>>>>>>> 63243a38292db520f63821b3103e98a3f8212c54
    }
}
//# sourceMappingURL=SpeedBubble.js.map