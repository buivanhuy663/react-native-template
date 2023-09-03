import axios, {AxiosRequestHeaders, AxiosResponse, AxiosResponseHeaders, InternalAxiosRequestConfig} from 'axios'
import moment from 'moment'
import {KeyStore} from '../../../../key_store/KeyStore'
import {loggerHelper} from '../../../utilities'

interface ResponseI {
  status: number
  data: any
  headers: AxiosResponseHeaders | any
}

const client = axios.create()

function loggerRequest(request: InternalAxiosRequestConfig) {
  const time = (moment(Date.now())).format('HH:mm:ss.SSS')
  loggerHelper.nomal(`\n╔[API][${time}] [Request][${request.method}]═════════════════════════════════════════════════════════`)
  loggerHelper.nomal(`║ Url: ${request.baseURL}${request.url}`)
  loggerHelper.nomal('║ Headers ━━━┓')
  loggerHelper.nomal(request.headers)
  loggerHelper.nomal(`║ Auth: ${request.auth}`)
  loggerHelper.nomal(`║ Param: ${request.params}`)
  loggerHelper.nomal('║ Data: ━━━┓')
  loggerHelper.nomal(JSON.parse(request.data))
  loggerHelper.nomal('╚════════════════════════════════════════════════════════════════════════════')
}

function loggerResponse(response: AxiosResponse) {
  const time = (moment(Date.now())).format('HH:mm:ss.SSS')
  loggerHelper.nomal(`\n╔[API][${time}] [Response][${response.config.method}]═════════════════════════════════════════════════════════`)
  loggerHelper.nomal(`║ Url: ${response.config.baseURL}${response.config.url}`)
  loggerHelper.nomal(`║ Time Response: ${Date.now() - response.config.headers['Request-Time']} (ms)`)
  loggerHelper.nomal('║ Headers ━┓')
  loggerHelper.nomal(response.headers)
  loggerHelper.nomal('║ Data ━┓')
  loggerHelper.nomal(response.data)
  loggerHelper.nomal('╚════════════════════════════════════════════════════════════════════════════')
}


client.interceptors.request.use((config) => {
  config.baseURL = KeyStore.baseUrl
  config.timeout = 30000
  config.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  } as AxiosRequestHeaders
  config.headers['Request-Time'] = Date.now()
  loggerRequest(config)
  return config
}, function (error) {
  return Promise.reject(error)
})

client.interceptors.response.use((response) => {
  loggerResponse(response)
  return response
}, function (error) {
  return Promise.reject(error)
})
export class ApiClient {

  static async post(props: {path: string, body?: any}): Promise<ResponseI> {
    try {
      const response = await client.post(props.path, JSON.stringify(props.body))
      const data = response.data
      const headers = response.headers
      return {
        status: response.status,
        data: data,
        headers: headers,
      }
    } catch (e) {
      throw e
    }
  }
}
