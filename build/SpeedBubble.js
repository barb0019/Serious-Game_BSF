export default class SpeedBubble {
    text;
    yCoordinate;
    xCoordinate;
    game;
    constructor(game, text, yCoordinate, xCoordinate) {
        this.game = game;
        this.text = text;
        this.yCoordinate = yCoordinate;
        this.xCoordinate = xCoordinate;
    }
    render() {
        this.game.writeTextToCanvas(this.text, 39, this.yCoordinate, this.xCoordinate, 'center', 'black');
    }
}
//# sourceMappingURL=SpeedBubble.js.map