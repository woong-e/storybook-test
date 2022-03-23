<template>
  <div>
    {{ text }}
    <Header />
    <List />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import Header from './view/Header.vue';
import List from './view/List.vue';

@Component({
  components: {
    Header,
    List
  }
})
export default class User extends Vue {
  //
  @Prop()
  text!: string
}
</script>
