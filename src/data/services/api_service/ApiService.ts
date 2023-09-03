import {ApiClient} from './ApiClient'

export class ApiService {

  static register(body: {email: string, password: string}) {
    return ApiClient.post({path: '/register', body: body})
  }

  static verifyAuthCode(body: {email: string, authCode: string}) {
    return ApiClient.post({path: '/verifyAuthCode', body: body})
  }

  static changePassword(body: {email: string, oldPassword: string, newPassword: string}) {
    return ApiClient.post({path: '/changePassword', body: body})
  }

  static login(body: {email: string, password: string}) {
    return ApiClient.post({path: '/login', body: body})
  }
}
