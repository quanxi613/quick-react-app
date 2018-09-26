import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// 用户信息
const user = {
  loginName: 'admin-mock',
  name: '真实姓名-mock',
  role: 'ROLE_VOICECLOUD_ADMIN',
  avatar: 'http://gtms04.alicdn.com/tps/i4/TB19yLUKXXXXXaEXXXXEDhGGXXX-32-32.png',
  userid: 1101,
}

export default {
  doMock() {
    let mock = new MockAdapter(axios);

    // $$ 用户相关
    // 获取用户信息,如果用户未登录,data为null或空
    mock.onPost('/user/getMyData').reply(200, {
      resCode: 1,
      data: user,
    })
    // 用户登录:成功resCode=1, resCode=0,resMsg为原因 identity 1为本地网 2为省 3为直辖市 4为集团
    mock.onPost('/user/login').reply(200, {
      resCode: 1,
      // resCode: 0,
      resMsg: '失败原因',
      data: {
        token: 'token-mock',
        identity: '4'
      }
    })

    mock.onGet('/listPriceBar').reply(200, {
      resCode: 1,
      resMsg: '信息',
      data: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    })
  }
}
