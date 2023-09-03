import {LoginResponse} from '../models/login/LoginResponse'
import {RegisterResponse} from '../models/register/RegisterResponse'
import {ApiService} from '../services/api_service/ApiService'

export class AuthRepository {

  static async register(props: {email: string, password: string}) {
    const response = await ApiService.register({email: props.email, password: props.password})
    const data: RegisterResponse = response.data
    return {headers: response.headers, data: data}
  }

  static async verifyAuthCode(props: {email: string, authCode: string}) {
    const response = await ApiService.verifyAuthCode({email: props.email, authCode: props.authCode})
    const data: RegisterResponse = response.data
    return {headers: response.headers, data: data}
  }

  static async login(props: {email: string, password: string}) {
    const response = await ApiService.login({email: props.email, password: props.password})
    const data: LoginResponse = response.data
    return {headers: response.headers, data: data}
  }

}
