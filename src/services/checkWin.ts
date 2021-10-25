import Square from '../types/square';
import SquareValue from '../types/squareValue';
import { getSquareValueById } from './getSquareById';

// thanks @atlas_se
// https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default function checkWin(squares: Square[]): number[] {
  const wins = winningConditions.filter(win => isWinningCondition(squares, win));
  return wins[0] ?? [];
}

function isWinningCondition(squares: Square[], win: number[]) {
  const sq0 = getSquareValueById(squares, win[0]);
  const sq1 = getSquareValueById(squares, win[1]);
  const sq2 = getSquareValueById(squares, win[2]);
  return (sq0 === sq1 && sq1 === sq2 && sq0 !== SquareValue.empty);
}
