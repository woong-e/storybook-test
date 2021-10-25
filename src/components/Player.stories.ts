import { Story } from '@storybook/vue';
import Player from './Player.vue';
import SquareValue from '../types/squareValue';

export type PlayerProps = {
  value: SquareValue;
  myTurn: boolean;
  win: boolean;
};

export default {
  title: 'components/Player',
  component: Player,
  argTypes: {
    value: {
      control: { type: 'select' },
      options: [SquareValue.x, SquareValue.o, SquareValue.empty]
    },
    myTurn: {
      default: true
    }
  }
};

const Template: Story<PlayerProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Player },
  template: '<Player :value="value" :myTurn="myTurn" :win="win" />'
});

export const Default = Template.bind({});
Default.args = {
  value: SquareValue.x,
  myTurn: true,
  win: false
};

export const Playground = Template.bind({});
Playground.args = {
  value: SquareValue.o,
  myTurn: false,
  win: true
};
