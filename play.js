let games = [];
let mines = [];
newGame = false;

function setup() {
	createCanvas(600, 600);
	background(255);
	button = createButton('newgame');
	button.mousePressed(newGame = true)
}


function draw() {
	// for (game in games) {

	// }
	if (newGame == true){
		drawMines()
		newGame = flase;
	}

}


function drawMines() {

	for (let x=0; x <5; x++) {
		for (let y=0; y<5; y++) {

			let mine =  x+y.toString()
			fill(0,200,100)
			strokeWeight(2)
			stroke(255)
			rect(x * 25,y*25,25,25)
			mines.push(mine)

		}
	}


	}