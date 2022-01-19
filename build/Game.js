import GameLoop from './GameLoop.js';
import Level2 from './Level2.js';
import Start from './Start.js';
import UserData from './UserData.js';
import Level3 from './Level3.js';
import Level4 from './Level4.js';
import MuteButton from './MuteButton.js';
import Level5 from './Level5.js';
export default class Game {
    canvas;
    ctx;
    user;
    gameLoop;
    static music;
    boughtItems;
    button;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        Game.music = new Audio('./assets/game-music-7408.mp3');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.boughtItems = [];
        this.gameLoop = new GameLoop();
        this.gameLoop.start(new Start(this));
        const { width } = this.canvas;
        const { height } = this.canvas;
        this.button = new MuteButton(width * 0.75, height * 0.56, 'button');
    }
    setBoughtItems(itemNumber) {
        this.boughtItems.push(itemNumber);
    }
    getBoughtItems() {
        return this.boughtItems;
    }
    resetBoughtItems() {
        this.boughtItems = [];
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
        this.music.muted = false;
    }
    static pause() {
        this.music.muted = true;
        this.music.pause();
    }
    getCurrentLevel() {
        switch (this.user.getLevel()) {
            case 1: return new Level2(this);
            case 2: return new Level2(this);
            case 3: return new Level3(this);
            case 4: return new Level4(this);
            case 5: return new Level5(this);
            default: return null;
        }
    }
}
//# sourceMappingURL=Game.js.map