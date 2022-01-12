import ScoringObject from './ScoringObject.js';
export default class PowerUp extends ScoringObject {
    constructor(maxX, maxY) {
        super('./assets/img/titled_yellow_power_icon.png', maxX - 53, maxY - 64, 0, 'powerup', false);
    }
    applyTo(player) {
        player.increaseSpeed(this.speed);
    }
}
//# sourceMappingURL=PowerUp.js.map