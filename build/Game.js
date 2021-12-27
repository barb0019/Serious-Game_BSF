import GameLoop from './GameLoop.js';
import Start from './Start.js';
import UserData from './UserData.js';
export default class Game {
    canvas;
    ctx;
    user;
    gameLoop;
    static music;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        Game.music = new Audio('./assets/game-music-7408.mp3');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gameLoop = new GameLoop();
        this.gameLoop.start(new Start(this));
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
        this.music.play();
        this.music.loop = true;
    }
    static pauze() {
        this.music.pause();
    }
}
//# sourceMappingURL=Game.js.map