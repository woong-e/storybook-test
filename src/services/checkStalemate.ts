import Square from '../types/square';
import SquareValue from '../types/squareValue';

export default function checkStalemate(squares: Square[]): boolean {
  const unplayed = squares.filter(s => s.value === SquareValue.empty);
  return unplayed.length === 0;
}
