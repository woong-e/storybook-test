<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AccordionListHeaderView extends Vue {
  //
  @Prop()
  text!: string

  computed: {
    // ...mapState('text', ['text'])
  }
}
</script>
