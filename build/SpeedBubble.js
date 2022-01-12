import Enemies from './Enemies.js';
export default class SpeedBubble extends Enemies {
    text;
    player1;
    player2;
    xCoordinate;
    yCoordinate;
    width;
    height;
    constructor(game, text, yCoordinate, xCoordinate, player1, player2, width, height) {
        super('./assets/img/textcloud.png', xCoordinate, yCoordinate, 0, 'speedbubble', true, game);
        this.player1 = player1;
        this.player2 = player2;
        this.text = text;
        this.width = width;
        this.height = height;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }
    render(canvas) {
        this.game.writeTextToCanvas(this.text, 39, this.xCoordinate + this.getImageWidth() / 2, this.yCoordinate + this.getImageHeight() / 2, 'center', 'black');
    }
}
//# sourceMappingURL=SpeedBubble.js.map