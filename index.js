function pawn(x1, y1, x2, y2) {
	return x2 === x1 + 1 && y2 === y1 + 1 || y1 === y2 - 1 && x1 === x2 - 1;
}

module.exports = pawn;
