import GameLoop from './GameLoop.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import Start from './Start.js';
import UserData from './UserData.js';
import Level3 from './Level3.js';
export default class Game {
    canvas;
    ctx;
    user;
    gameLoop;
    static music;
    boughtItems;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.boughtItems = [];
        this.gameLoop = new GameLoop();
        this.gameLoop.start(new Start(this));
    }
    setBoughtItems(itemNumber) {
        this.boughtItems.push(itemNumber);
    }
    getBoughtItems() {
        return this.boughtItems;
    }
    getUser() {
        return this.user;
    }
    reset() {
        this.user = new UserData();
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'white') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static play() {
    }
    static pause() {
    }
    getCurrentLevel() {
        switch (this.user.getLevel()) {
            case 1: return new Level2(this);
            case 2: return new Level1(this);
            case 3: return new Level3(this);
            default: return null;
        }
    }
}
//# sourceMappingURL=Game.js.map