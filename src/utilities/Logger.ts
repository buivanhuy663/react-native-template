/* eslint-disable no-console */

import moment from 'moment'

export class loggerHelper {

  static oldTime = 0
  private static get getTime() {return (moment(Date.now())).format('HH:mm:ss.SSS')}

  static info(params: any) {
    const now = Date.now()
    console.info(`[INFO][${this.getTime}][${now - this.oldTime}] ${params}`)
    this.oldTime = now
  }

  static debug(params: any) {
    const now = Date.now()
    console.debug(`[DEBUG][${this.getTime}][${now - this.oldTime}] ${params}`)
    this.oldTime = now
  }

  static warn(params: any) {
    const now = Date.now()
    console.warn(`[WARN][${this.getTime}][${now - this.oldTime}] ${params}`)
    this.oldTime = now
  }

  static error(params: any) {
    const now = Date.now()
    console.error(`[ERRO][${this.getTime}][${now - this.oldTime}] ${params}`)
    this.oldTime = now
  }

  static nomal(params: any) {
    console.log(params)
  }
}
