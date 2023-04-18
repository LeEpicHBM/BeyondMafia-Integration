const Card = require("../../Card");

module.exports = class Devout extends Card {

    constructor(role) {
    
        super(role);

        this.player.alignment = "Monsters";
        this.winCount = "Monsters";
       
    }
}
// thx starry 