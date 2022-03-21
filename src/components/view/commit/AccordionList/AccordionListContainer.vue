<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Header from './view/AccordionListHeaderView.vue';
import Content from './view/AccordionListContentView.vue';

export default Vue.extend({
  //
  components: {
    Header,
    Content
  },
  props: {
    text: String
  }
});
</script>

<style scoped>

</style>
