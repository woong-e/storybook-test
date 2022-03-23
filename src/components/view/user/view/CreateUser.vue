<template>
  <div>
    <el-container style="justify-content: center; border-radius: 1px">
      <el-row>
        <el-col>
          tno
        </el-col>
        <el-col>
            <el-input placeholder="Please input" v-model="tno"></el-input>
        </el-col>

        <el-col>
          성별
        </el-col>
        <el-col>
          <el-input placeholder="Please input" v-model="customerGender"></el-input>
        </el-col>

        <el-col>
          생일
        </el-col>
        <el-col>
          <el-input placeholder="Please input" v-model="customerBirth"></el-input>
        </el-col>

        <el-col>
          닉네임
        </el-col>
        <el-col>
          <el-input placeholder="Please input" v-model="customerNickname"></el-input>
        </el-col>

        <el-col>
          상태
        </el-col>
        <el-col>
          <el-input placeholder="Please input" v-model="customerState"></el-input>
        </el-col>

        <el-col>
          <el-button @click="createUser">등록</el-button>
        </el-col>
      </el-row>

    </el-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { UserCdo } from '../../../api/user/api-model/sdo';
import axios from 'axios';

const url = 'http://localhost:9093/aggregate/loca/user/command';

@Component
export default class CreateUser extends Vue {
  tno='';
  customerGender='';
  customerBirth='';
  customerNickname='';
  customerState='';

  createInfo = {
    cqrsBaseCommandType: 'Register',
    cqrsCommandType: 'BaseCommand',
    domainMessageType: 'CqrsCommand',

    multiCdo: false,

    userCdo: {
    }
  };

  async createUser() {
    const createInfo = {
      cqrsBaseCommandType: 'Register',
      cqrsCommandType: 'BaseCommand',
      domainMessageType: 'CqrsCommand',
      multiCdo: false,
      userCdo: {
        tno: this.tno,
        customerBirth: this.customerBirth,
        customerGender: this.customerGender,
        customerNickname: this.customerNickname,
        customerState: this.customerState
      }
    };
    await axios.post(url, createInfo)
      .then((succes) => {
        console.log('createSucces', succes);
      });
  }
}
</script>

<style scoped>

</style>
