import { Story } from '@storybook/vue';
import { User } from '../../../components/view';

export type AccordionListProps = {
  text: string;
};

export default {
  title: 'view/user',
  component: User
};

const Template: Story<AccordionListProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { User },
  template: '<User :pageType="pageType" />'
});

export const List = Template.bind({});
List.args = {
  pageType: 'list'
};

export const Create = Template.bind({});
Create.args = {
  pageType: 'create'
};
