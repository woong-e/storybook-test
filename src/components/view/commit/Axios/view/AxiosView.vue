<template>
  <div>
    <el-button type="primary" @click="getData">{{title}}</el-button>
    {{result}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Props {
  title: string,
  getData: () => any | null
}

@Component
export default class AxiosView extends Vue {
  @Prop()
  private title!: string;

  @Prop()
  private getData!: () => any;

  @Prop()
  private result!: any;

  data() {
    return {
      buttonTitle: this.title,
      locaUsers: this.getData
    };
  }
}

</script>

<style scoped>

</style>
