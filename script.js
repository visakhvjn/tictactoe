let turn = 0;
let boxesFilled = 0;
let hasWon = false;

const board = ['', '', '', '', '', '', '', '', ''];
const winningCases = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const boxClickHandler = (event) => {

	const boxId = event.target.id;

	if (board[parseInt(boxId)] !== '') {
		return;
	}

	if (hasWon) {
		location.reload();
		return;
	}

	document.getElementById(boxId).innerHTML = turn ? 'X': 'O';
	document.getElementById(boxId).style.color = turn ? 'red' : 'black';

	board[parseInt(boxId)] = turn;

	boxesFilled++;

	calculateWinner();

	turn = 1 - turn;
};

const calculateWinner = () => {

	for (let winningCase of winningCases) {

		if (board[winningCase[0]] === board[winningCase[1]] && board[winningCase[1]] === board[winningCase[2]] && (board[winningCase[2]] === 1 || board[winningCase[2]] === 0)) {
			return colorWinnerBoxes(winningCase[0], winningCase[1], winningCase[2]);
		}
	}

	if (boxesFilled == 9) {
		document.getElementById('result').innerHTML = `It's a Draw!!!`;

	}

};

const colorWinnerBoxes = (a, b, c) => {

	document.getElementById(a).style.backgroundColor = 'green';
	document.getElementById(b).style.backgroundColor = 'green';
	document.getElementById(c).style.backgroundColor = 'green';

	document.getElementById('result').innerHTML = `Winner is ${turn ? 'X': 'O'}`;

	hasWon = true;
};

const initializeBoard = () => {
	for (let box of board) {
		box = '';
	}
}

initializeBoard();