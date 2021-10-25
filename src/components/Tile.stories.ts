import { Story } from '@storybook/vue';
import Tile from './Tile.vue';
import SquareValue from '../types/squareValue';

export type TileProps = {
  value: SquareValue;
  gameOver: boolean;
  win: boolean;
};

export default {
  title: 'components/Tile',
  component: Tile,
  argTypes: {
    value: {
      control: { type: 'select' },
      options: [SquareValue.x, SquareValue.o, SquareValue.empty]
    },
    gameOver: {
      default: false
    },
    win: {
      default: false
    },
    click: {
      action: 'click'
    }
  }
};

const Template: Story<TileProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tile },
  template: '<Tile @click="click" :value="value" :gameOver="gameOver" :win="win" />'
});

export const Default = Template.bind({});
Default.args = {
  value: SquareValue.x,
  gameOver: false,
  win: false
};

export const Playground = Template.bind({});
Playground.args = {
  value: SquareValue.o,
  gameOver: true,
  win: true
};

export const ClickOnlyOnUnset = Template.bind({});
ClickOnlyOnUnset.args = {
  value: SquareValue.empty,
  gameOver: false,
  win: false
};

export const GameOver = Template.bind({});
GameOver.args = {
  value: SquareValue.x,
  gameOver: true,
  win: false
};

export const Win = Template.bind({});
Win.args = {
  value: SquareValue.o,
  gameOver: false,
  win: true
};
