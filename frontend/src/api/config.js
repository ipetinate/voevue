// Import do Client AXIOS
import axios from 'axios'

// Exportando uma constante chamada HTTP para representar o Axios com suas configurações
export const http = axios.create({
  baseURL: 'http://localhost:3000/'
})
