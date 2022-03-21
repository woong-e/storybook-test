import { Story } from '@storybook/vue';
import { AccordionList } from '../../../components';

export type AccordionListProps = {
  text: string;
};

export default {
  title: 'view/commit/accordionList',
  component: AccordionList
};

const Template: Story<AccordionListProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AccordionList },
  template: '<AccordionList :text="text" />'
});

export const Default = Template.bind({});
Default.args = {
  text: 'default'
};

export const Playground = Template.bind({});
Playground.args = {
  text: 'Playground'
};

export const GameOver = Template.bind({});
GameOver.args = {
  text: 'GameOver'
};

export const GameNotOver = Template.bind({});
GameNotOver.args = {
  text: 'GameNotOver'
};
