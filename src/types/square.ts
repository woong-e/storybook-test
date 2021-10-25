import SquareValue from './squareValue';

export default interface Square {
  value: SquareValue;
  id: number;
  win: boolean;
}
