import GameItem from './GameItem.js';
export default class SpeedBubble extends GameItem {
    text;
    player1;
    player2;
    game;
    width;
    height;
    constructor(game, text, yCoordinate, xCoordinate, player1, player2, width, height) {
        super('./assets/img/textcloud.png', xCoordinate, yCoordinate, 'speedbubble');
        this.game = game;
        this.player1 = player1;
        this.player2 = player2;
        this.text = text;
        this.width = width;
        this.height = height;
    }
    render(canvas) {
        this.game.writeTextToCanvas(this.text, 20, this.yPos + this.img.width / 2 + 20, this.xPos + this.img.height - 10, 'center', 'black');
        this.game.writeTextToCanvas(this.text, 39, this.yPos + this.img.width / 2, this.xPos - this.img.height / 2, 'center', 'black');
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.yPos, this.xPos, this.width, this.height);
    }
}
//# sourceMappingURL=SpeedBubble.js.map