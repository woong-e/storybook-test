import { UserCdo } from '../../api-model/sdo';
import axios from 'axios';

const createInfo = {
  cqrsBaseCommandType: 'Register',
  cqrsCommandType: 'BaseCommand',
  domainMessageType: 'CqrsCommand',

  multiCdo: false,

  userCdo: {
  }
};

class LocaResource {
  static instance: LocaResource;
  private readonly url: string = 'http://localhost:9093/aggregate/loca/user/query';

  async createUserCommand(userCdo: UserCdo) {
    createInfo.userCdo = userCdo;
    await axios.post(this.url, {
      createInfo
    })
      .then((succes) => {
        console.log('createSucces', succes);
      })
      .catch((err) => {
        console.log('createFail', err);
      });
  }
}
LocaResource.instance = new LocaResource();
export default LocaResource;
