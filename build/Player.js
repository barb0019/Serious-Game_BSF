import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import Game from './Game.js';
import MuteButton from './MuteButton.js';
export default class Player extends GameItem {
    xVel;
    keyBoard;
    xPosPrevious;
    yPosPrevious;
    gravity;
    onPlatform;
    jumpHeight;
    static gravityIncrease = 0.2;
    isJumping;
    game;
    walkingLeftRed;
    walkingRightRed;
    walkingLeftBlue;
    walkingRightBlue;
    animationFrameRed;
    animationFrameBlue;
    static animationSpeed = 7;
    constructor(imageSrc, maxX, maxY, type, game) {
        super(imageSrc, maxX - 76, maxY - 92, type);
        this.game = game;
        Player.gravityIncrease = game.canvas.height * 0.00025;
        this.jumpHeight = Player.gravityIncrease * 50;
        this.xVel = 5;
        this.keyBoard = new KeyListener();
        this.xPosPrevious = [];
        this.yPosPrevious = [];
        this.xPosPrevious.push(0);
        this.yPosPrevious.push(0);
        this.animationFrameRed = 0;
        this.animationFrameBlue = 0;
        this.createAnimationArray();
        this.gravity = 0;
        this.checkBoughtItems();
    }
    createAnimationArray() {
        this.walkingLeftRed = [
            './assets/img/animations/RedKidAnimation.png',
            './assets/img/animations/RedKidAnimation1.png',
            './assets/img/animations/RedKidAnimation2.png',
            './assets/img/animations/RedKidAnimation3.png',
            './assets/img/animations/RedKidAnimation4.png',
            './assets/img/animations/RedKidAnimation5.png',
            './assets/img/animations/RedKidAnimation6.png',
            './assets/img/animations/RedKidAnimation7.png',
            './assets/img/animations/RedKidAnimation8.png',
        ];
        this.walkingRightRed = [
            './assets/img/animations/RedKidAnimationRight.png',
            './assets/img/animations/RedKidAnimationRight1.png',
            './assets/img/animations/RedKidAnimationRight2.png',
            './assets/img/animations/RedKidAnimationRight3.png',
            './assets/img/animations/RedKidAnimationRight4.png',
            './assets/img/animations/RedKidAnimationRight5.png',
            './assets/img/animations/RedKidAnimationRight6.png',
            './assets/img/animations/RedKidAnimationRight7.png',
            './assets/img/animations/RedKidAnimationRight8.png',
        ];
        this.walkingLeftBlue = [
            './assets/img/animations/GirlAnimation1.png',
            './assets/img/animations/GirlAnimation2.png',
            './assets/img/animations/GirlAnimation3.png',
            './assets/img/animations/GirlAnimation4.png',
            './assets/img/animations/GirlAnimation5.png',
            './assets/img/animations/GirlAnimation6.png',
            './assets/img/animations/GirlAnimation7.png',
            './assets/img/animations/GirlAnimation8.png',
            './assets/img/animations/GirlAnimation9.png',
        ];
        this.walkingRightBlue = [
            './assets/img/animations/GirlAnimationRight1.png',
            './assets/img/animations/GirlAnimationRight2.png',
            './assets/img/animations/GirlAnimationRight3.png',
            './assets/img/animations/GirlAnimationRight4.png',
            './assets/img/animations/GirlAnimationRight5.png',
            './assets/img/animations/GirlAnimationRight6.png',
            './assets/img/animations/GirlAnimationRight7.png',
            './assets/img/animations/GirlAnimationRight8.png',
            './assets/img/animations/GirlAnimationRight9.png',
        ];
    }
    loadImages() {
        for (let i = 0; i < this.walkingLeftRed.length; i++) {
            Game.loadNewImage(this.walkingLeftRed[i]);
            Game.loadNewImage(this.walkingLeftBlue[i]);
            Game.loadNewImage(this.walkingRightRed[i]);
            Game.loadNewImage(this.walkingRightBlue[i]);
        }
    }
    checkBoughtItems() {
        const boughtItems = this.game.getBoughtItems();
        for (let i = 0; i < boughtItems.length; i++) {
            if (boughtItems[i] === 0) {
                this.jumpHeight *= 1.1;
            }
            if (boughtItems[i] === 1) {
                this.xVel *= 1.1;
            }
        }
    }
    increaseGravity() {
        if (!this.onPlatform) {
            this.yPos += this.gravity;
            this.gravity += Player.gravityIncrease;
        }
    }
    jump() {
        if (!this.onPlatform) {
            this.yPos -= this.jumpHeight;
        }
        else {
            if (MuteButton.muted === false) {
                this.jumpMusic();
            }
            this.isJumping = false;
        }
    }
    setXPos(xPos) {
        this.xPos = xPos;
    }
    setYPos(yPos) {
        this.yPos = yPos;
    }
    getYPos() {
        return this.yPos;
    }
    getXVel() {
        return this.xVel;
    }
    getGravity() {
        return this.gravity;
    }
    getXPos() {
        return this.xPos;
    }
    getJumpHeight() {
        return this.jumpHeight;
    }
    setGravity(gravity) {
        this.gravity = gravity;
    }
    setOnPlatform(trueOrFalse) {
        this.onPlatform = trueOrFalse;
    }
    getOnPlatform() {
        return this.onPlatform;
    }
    increaseSpeed(size) {
        this.xVel += size;
    }
    jumpMusic() {
        const jumpMusic = new Audio('./assets/jumpMusic.mp3');
        jumpMusic.play();
    }
    move(canvas) {
        this.loadImages();
        let keys = [];
        const klisten = KeyListener;
        if (this.getType() === 'blue') {
            keys = [klisten.KEY_D, klisten.KEY_A, klisten.KEY_W, klisten.KEY_S];
        }
        else {
            keys = [klisten.KEY_RIGHT, klisten.KEY_LEFT, klisten.KEY_UP, klisten.KEY_DOWN];
        }
        const minX = 0;
        const maxX = canvas.width - this.img.width;
        const minY = 0;
        if (this.keyBoard.isKeyDown(keys[0]) && this.xPos < maxX) {
            this.xPos += this.xVel;
            this.animateRight();
            if (this.xPos > maxX) {
                this.xPos = maxX;
            }
        }
        if (this.keyBoard.isKeyDown(keys[1]) && this.xPos > minX) {
            this.xPos -= this.xVel;
            this.animateLeft();
            if (this.xPos < minX) {
                this.xPos = minX;
            }
        }
        if (this.keyBoard.isKeyDown(keys[2]) && this.yPos > minY) {
            if (this.onPlatform) {
                this.isJumping = true;
                this.setOnPlatform(false);
            }
        }
        if (this.isJumping === true) {
            this.jump();
            if (this.yPos < minY) {
                this.yPos = minY;
            }
        }
    }
    animateRight() {
        if (this.getType() === 'blue' && this.onPlatform) {
            this.animationFrameBlue += 1;
            if (this.animationFrameBlue % Player.animationSpeed === 0) {
                if (this.animationFrameBlue / Player.animationSpeed >= this.walkingRightBlue.length) {
                    this.animationFrameBlue = 0;
                }
                this.setImage(this.walkingRightBlue[this.animationFrameBlue / Player.animationSpeed]);
            }
        }
        else if (this.getType() === 'blue' && !this.onPlatform) {
            this.setImage(this.walkingRightBlue[0]);
        }
        else if (this.getType() === 'red' && this.onPlatform) {
            this.animationFrameRed += 1;
            if (this.animationFrameRed % Player.animationSpeed === 0) {
                if (this.animationFrameRed / Player.animationSpeed >= this.walkingRightRed.length) {
                    this.animationFrameRed = 0;
                }
                this.setImage(this.walkingRightRed[this.animationFrameRed / Player.animationSpeed]);
            }
        }
        else if (this.getType() === 'red' && !this.onPlatform) {
            this.setImage(this.walkingRightRed[0]);
        }
    }
    animateLeft() {
        if (this.getType() === 'blue' && this.onPlatform) {
            this.animationFrameBlue += 1;
            if (this.animationFrameBlue % Player.animationSpeed === 0) {
                if (this.animationFrameBlue / Player.animationSpeed >= this.walkingLeftBlue.length) {
                    this.animationFrameBlue = 0;
                }
                this.setImage(this.walkingLeftBlue[this.animationFrameBlue / Player.animationSpeed]);
            }
        }
        else if (this.getType() === 'blue' && !this.onPlatform) {
            this.setImage(this.walkingLeftBlue[0]);
        }
        else if (this.getType() === 'red' && this.onPlatform) {
            this.animationFrameRed += 1;
            if (this.animationFrameRed % Player.animationSpeed === 0) {
                if (this.animationFrameRed / Player.animationSpeed >= this.walkingLeftRed.length) {
                    this.animationFrameRed = 0;
                }
                this.setImage(this.walkingLeftRed[this.animationFrameRed / Player.animationSpeed]);
            }
        }
        else if (!this.onPlatform) {
            this.setImage(this.walkingLeftRed[0]);
        }
    }
}
//# sourceMappingURL=Player.js.map