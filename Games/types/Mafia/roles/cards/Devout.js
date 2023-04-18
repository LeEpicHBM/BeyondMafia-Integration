const Card = require("../../Card");

module.exports = class Devout extends Card {

    constructor(role) {
    
        super(role);

        this.role.alignment = "Monsters";
        this.winCount = "Monsters";
       
    }
}
// thx starry 