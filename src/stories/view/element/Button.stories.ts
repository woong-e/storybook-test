import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import { Button } from '../../../components/view';

const template = '<Button :text="text" />';

export const store = new Vuex.Store({
  modules: {
    State: {
      namespaced: true,
      state: {
        text: 'vuex'
      },
      getters: {
        getText: (state) => {
          return state.text;
        }
      }
    }
  }
});

storiesOf('view/element/button', module)
  .add('Default', () => ({
    data: () => ({
      text: '검색'
    }),
    components: {
      Button
    },
    template,
    store
  }));
