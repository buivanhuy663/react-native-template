export interface LoginResponse {
  status: number
  message: string
  data: {
    id: string
    email: string
    token: string
  }
}
