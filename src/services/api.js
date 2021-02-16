import axios from 'axios';

const api =axios.create({
    baseURL: 'http://localhost:5000',
});

// excutar API
// json-server server.json(nome do arquivo) -p(porta) 5000(numero da porta) -w(acompanha mudanças, tipo o nodemon. Ñ obrigatorio)
export default api;