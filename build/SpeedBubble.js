export default class SpeedBubble {
    game;
    constructor(game, text, yCoordinate, xCoordinate) {
        this.game = game;
        this.game.writeTextToCanvas(text, 125, yCoordinate, xCoordinate, 'center', 'red');
    }
}
//# sourceMappingURL=SpeedBubble.js.map