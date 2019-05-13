import { http } from './config'

export default {
  listar: (perfil, repo) => {
    return http.get(`/repos/${perfil}/${repo}/`)
  }
}
