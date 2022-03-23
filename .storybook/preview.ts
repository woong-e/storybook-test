import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';

Vue.use(Vuex);
Vue.use(ElementUI);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
