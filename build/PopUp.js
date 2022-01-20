export default class PopUp {
    game;
    player;
    xPos;
    yPos;
    alerted;
    text;
    constructor(xPos, yPos, text, game, player) {
        this.game = game;
        this.player = player;
        this.xPos = xPos;
        this.yPos = yPos;
        this.text = text;
        this.alerted = false;
        this.collidesPopUpWithPlayer();
    }
    collidesPopUpWithPlayer() {
        let alertOnce = false;
        if (this.alerted === true) {
            return;
        }
        for (let i = 0; i < this.player.length; i++) {
            if (this.xPos < this.player[i].getXPos()
                + this.player[i].getImageWidth() + this.player[i].getXVel()
                && this.xPos + window.innerWidth * 0.1 > this.player[i].getXPos() - this.player[i].getXVel()
                && this.yPos < this.player[i].getYPos() + this.player[i].getImageHeight()
                && this.yPos + window.innerHeight * 0.1 > this.player[i].getYPos()) {
                this.alerted = true;
                alertOnce = true;
            }
        }
        if (alertOnce === true) {
            window.alert(this.text);
        }
    }
}
//# sourceMappingURL=PopUp.js.map