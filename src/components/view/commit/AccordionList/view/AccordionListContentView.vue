<template>
  <el-row :gutter="8" style="margin-top: 16px;">
    <el-col :span="24">
      <el-collapse
        v-for="({value, text, contents}, index) in gitLabProjects"
        :key="index"
      >
        <el-collapse-item :title="text" :name="value">
          <div>{{contents}}</div>
        </el-collapse-item>
      </el-collapse>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  //
  props: {
    text: String
  },
  data() {
    return {
      gitLabProjects: [
        { value: 'a', text: 'aa', contents: 'aaaa' },
        { value: 'b', text: 'bb', contents: 'adsaasdf' }
      ],
      selected: []
    };
  },
  methods: {}
});
</script>

<style scoped>

</style>
