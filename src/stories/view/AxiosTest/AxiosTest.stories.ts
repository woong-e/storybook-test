import { Story } from '@storybook/vue';
import { AxiosContainer } from '../../../components';

export type AxiosTest = {

};

export default {
  title: 'view/commit/axios',
  component: AxiosContainer
};

const Template: Story<AxiosTest> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AxiosContainer },
  template: '<AxiosContainer />'
});

export const Default = Template.bind({});
Default.args = {
};
