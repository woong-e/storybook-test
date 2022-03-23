import { Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';

import store from '../store';

interface Project {
  value: string
  text: string
  contents: string
}

@Module({
  dynamic: true,
  name: 'userStore',
  namespaced: true,
  store
})
export default class UserModule extends VuexModule {
  //
  list = []

  @Mutation
  setList(list: []) {
    console.log('setList', list);
    this.list = list;
  }

  get getList() {
    return this.list;
  }
}

export const userStore = getModule(UserModule);
