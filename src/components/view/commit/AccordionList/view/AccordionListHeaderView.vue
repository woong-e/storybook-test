<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <el-select v-model="filterOption" placeholder="Select" style="width: 100%;">
        <el-option
          v-for="item in items"
          :key="item.value"
          :label="item.text"
          :value="item.value"
        />
      </el-select>
    </el-col>
    <el-col :span="5">
      <el-input
        placeholder="UserId"
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

interface Data {
  items: [],
  filterOption: string,
  name: string,
}

export default Vue.extend({
  //
  data() {
    const data: Data = {
      filterOption: 'all',
      name: '',
      items: [
        { value: 'all', text: '전체' },
        { value: 'group', text: '그룹' },
        { value: 'project', text: '프로젝트' }
      ]
    };
    return data;
  },
  methods: {
    handleClick() {
      console.log(this.filterOption, this.name);
    }
  }
});
</script>

<style scoped>

</style>
