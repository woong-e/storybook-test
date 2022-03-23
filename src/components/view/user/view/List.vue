<template>
  <el-row
    :gutter="8"
    style="margin-top: 16px;"
  >
    <el-col :span="24">
      <el-table
        :data="list"
        style="width: 100%"
        empty-text="데이터가 없습니다."
      >
        <el-table-column
          prop="tNo"
          label="사번"
          width="180"
        />
        <el-table-column
          prop="customerNickname"
          label="이름"
        />
        <el-table-column
          prop="customerBirth"
          label="생일"
          width="180"
        />
        <el-table-column
          prop="customerGender"
          label="성별"
          width="180"
        />
      </el-table>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { userStore } from '../../../';

@Component
export default class List extends Vue {
  //
  list = [...userStore.getList];
}
</script>
