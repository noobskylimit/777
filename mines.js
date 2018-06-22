class Mines {
	constructor(x,y,bomb) {
		this.x = x;
    	this.y = y;
    	this.bomb = bomb
	}

	blowUp() {

		return this.bomb == true;
	}

}