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
import { Component } from 'vue-property-decorator';

// import { elementStore } from '../../../../state/AccordionModule';

@Component
export default class AccordionListContentView extends Vue {
  //
  gitLabProjects = [];

  created(): void {
    // console.log('created', elementStore.getGitLabProjects);
    this.gitLabProjects = [];
  }
}
</script>
