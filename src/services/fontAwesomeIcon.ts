import SquareValue from '../types/squareValue';

export default function fontAwesomeIcon(value: SquareValue, dimmed: boolean, win?: boolean): string {
  const classes = [];
  if (win) {
    classes.push('win');
  } else if (dimmed) {
    classes.push('dimmed');
  }
  if (value === SquareValue.x) {
    classes.push('fas fa-times');
  } else if (value === SquareValue.o) {
    classes.push('far fa-circle');
  } else {
    classes.push(''); // blank
  }
  return classes.join(' ');
}
