import Square from '../types/square';
import SquareValue from '../types/squareValue';

export function getSquareById(squares: Square[], id: number): Square | undefined {
  return squares.find(s => s.id === id);
}

export function getSquareValueById(squares: Square[], id: number): SquareValue {
  return squares.find(s => s.id === id)?.value ?? SquareValue.empty;
}
