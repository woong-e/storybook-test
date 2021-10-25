import { Story } from '@storybook/vue';
import NewGame from './NewGame.vue';

export type NewGameProps = {
  gameOver: boolean;
};

export default {
  title: 'components/NewGame',
  component: NewGame,
  argTypes: {
    click: {
      action: 'click'
    }
  }
};

const Template: Story<NewGameProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NewGame },
  template: '<NewGame @click="click" :gameOver="gameOver" />'
});

export const Default = Template.bind({});
Default.args = {
  gameOver: false
};

export const Playground = Template.bind({});
Playground.args = {
  gameOver: true
};

export const GameOver = Template.bind({});
GameOver.args = {
  gameOver: true
};

export const GameNotOver = Template.bind({});
GameNotOver.args = {
  gameOver: false
};
