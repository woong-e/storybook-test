import { Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';

import store from './index';

interface Project {
  value: string
  text: string
  contents: string
}

@Module({
  dynamic: true,
  name: 'keeper',
  namespaced: true,
  store
})
export default class AccordionModule extends VuexModule {
  //
  gitLabProjects = [
    { value: 'a', text: 'aa', contents: 'aaaa' },
    { value: 'b', text: 'bb', contents: 'adsaasdf' }
  ]

  get getGitLabProjects(): Project[] {
    console.log('getGitLabProjects', this.gitLabProjects);
    return this.gitLabProjects;
  }
}

export const accordionStore = getModule(AccordionModule);
