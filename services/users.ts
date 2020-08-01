import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './Helper/BaseService'
import { IUser } from '~/models/User'
export default class UserService extends BaseService<IUser> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios, 'admin/users')
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    users: UserService
  }
}
