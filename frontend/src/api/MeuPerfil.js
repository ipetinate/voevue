import { http } from './config'

export default {
  obter: (user) => {
    return http.get(`/users/${user}/`)
  }
}
