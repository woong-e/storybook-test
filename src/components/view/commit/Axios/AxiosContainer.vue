<template>
  <div>
    <AxiosView
      :getData='getData'
      :title='title'
      :result='data'
    />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import AxiosView from './view/AxiosView.vue';
import axios from 'axios';

const url = 'http://localhost:9093/aggregate/loca/user/query';

export default Vue.extend({
  components: {
    AxiosView
  },
  data() {
    return {
      title: 'getLocaUsers',
      data: {}
    };
  },
  methods: {
    async getData() {
      this.data = await axios
        .post(`${url}/dynamic-multi`, {
          offset: {
            limit: 10000,
            offset: 0,
            sortDirection: 'ASCENDING',
            sortingField: 'tno',
            totalCount: 1,
            totalCountRequested: true
          },
          queryParams: {
            queryParams: [
              {
                connector: 'End',
                fieldName: 'id',
                operation: 'Equal',
                value: '*'
              }
            ]
          }
        }).then((resultData) => {
          return resultData;
        })
        .catch((e) => {
          console.log('fail...', e);
        });
    }
  }
});

</script>

<style scoped>

</style>
