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
