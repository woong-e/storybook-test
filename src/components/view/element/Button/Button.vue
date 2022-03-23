<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  //
  props: {
    text: String
  },
  computed: {
    // ...mapState('text', ['text'])
  }
});
</script>
