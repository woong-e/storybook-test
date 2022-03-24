<template>
  <div>
    <Header v-if="pageType === 'list'"/>
    <List v-if="pageType === 'list'"/>
    <RegistUser v-if="pageType === 'create'"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import Header from './view/Header.vue';
import List from './view/List.vue';
import RegistUser from './view/CreateUser.vue';

@Component({
  components: {
    Header,
    List,
    RegistUser
  }
})
export default class User extends Vue {
  //
  @Prop()
  pageType!: string
}
</script>
