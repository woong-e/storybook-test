<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <el-input
        placeholder="이름"
        v-model="name"
      />
    </el-col>
    <el-col :span="8">
      <el-button @click="handleClick">검색</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { findUserList, userStore } from '../../../';

@Component
export default class Header extends Vue {
  //
  name = '';

  async handleClick() {
    const { status, data } = await findUserList();
    console.log(status, data);
    userStore.setList(data.queryResult);
  }
}
</script>
