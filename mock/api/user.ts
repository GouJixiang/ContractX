import { userModel } from '../model'
import { MockMethod } from 'vite-plugin-mock'

/** 参数错误的状态码 */
const ERROR_PARAM_CODE = 10000
const ERROR_PARAM_MSG = '参数校验失败'

const apis: MockMethod[] = [
  // 获取验证码
  {
    url: '/mock/login/getSmsCode',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: true,
      }
    },
  },
  // 账密登录
  {
    url: '/mock/login/pwd',
    method: 'post',
    response: (option: any) => {
      const { username = undefined, password = undefined } = option.body
      if (!username || !password) {
        return {
          code: ERROR_PARAM_CODE,
          message: ERROR_PARAM_MSG,
          data: null,
        }
      }

      const findItem = userModel.find(
        (item) => item.username === username && item.password === password
      )
      if (findItem) {
        return {
          code: 200,
          message: 'ok',
          data: {
            token: findItem.token,
            refreshToken: findItem.refreshToken,
          },
        }
      }
      return {
        code: 1000,
        messgae: '用户名或密码错误！',
        data: null,
      }
    },
  },
  // 手机号码登录
  {
    url: '/mock/login/phone',
    method: 'post',
    response: (options: any) => {
      const { phone = undefined, code = undefined } = options.body
      if (!phone || !code) {
        return {
          code: ERROR_PARAM_CODE,
          message: ERROR_PARAM_MSG,
          data: false,
        }
      }

      return {
        code: 200,
        message: 'ok',
        data: {
          token: '_TOKEN_PHONE_',
          refreshToken: '_REFRESH_TOKEN_PHONE_',
        },
      }
    },
  },
]

export default apis
