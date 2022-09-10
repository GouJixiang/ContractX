import { defineStore } from 'pinia'

interface UserState {
  userId: number
  username: string
  password: string
  phone: string
  email: string
  group: string
  role: string
}

export const useUserStore = defineStore('user-store', {
  state: (): UserState => ({
    userId: 0,
    username: '',
    password: '',
    phone: '',
    email: '',
    group: '',
    role: '',
  }),
  getters: {
  },
  actions: {

    /**
     * 用户密码登录
     * @param username 用户名称
     * @param password 用户密码
     */
    async loginByPwd(username: string, password: string) {
        console.log('用户名：' + username + '\t密码：' + password)
    },
  }
})
