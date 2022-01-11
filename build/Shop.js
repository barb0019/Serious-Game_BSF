import Scene from './Scene.js';
export default class Shop extends Scene {
    keyboard;
    constructor(game) {
        super(game);
    }
    update(elapsed) {
        return null;
    }
    processInput() {
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.game.writeTextToCanvas('SHOP', 90, this.game.canvas.width / 2, this.game.canvas.height / 5, 'center', 'black');
    }
}
//# sourceMappingURL=Shop.js.map