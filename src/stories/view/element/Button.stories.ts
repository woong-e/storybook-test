import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import { Button } from '../../../components/view';

const template = '<Button :text="text" />';

storiesOf('view/element/button', module)
  .add('Default', () => ({
    data: () => ({
      text: '검색'
    }),
    components: {
      Button
    },
    template
    // store: new Vuex.Store({
    //   modules: {
    //     element: {
    //       namespaced: true,
    //       state: {
    //         text: 'vuex'
    //       }
    //     }
    //   }
    // })
  }));
