export default class SpeedBubble {
    text;
    yCoordinate;
    xCoordinate;
    player1;
    player2;
    game;
    constructor(game, text, yCoordinate, xCoordinate, player1, player2) {
        this.game = game;
        this.player1 = player1;
        this.player2 = player2;
        this.text = text;
        this.yCoordinate = yCoordinate;
        this.xCoordinate = xCoordinate;
    }
    render() {
        const text = document.getElementById('textarea');
        text.innerHTML = 'test';
        text.style.position = 'center';
        this.game.writeTextToCanvas(this.text, 39, this.yCoordinate, this.xCoordinate, 'center', 'black');
    }
}
//# sourceMappingURL=SpeedBubble.js.map