import axios from 'axios';

const url = 'http://172.20.10.8:9093/aggregate/loca/user/query';

const findUserList = async () => {
  return await axios.post(`${url}/dynamic-multi`, {
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
  });
};

export {
  findUserList
};
