/**PARA SABER MAIS SOBRE O USO DO REDUX, ACESSE O CURSO DA ROCKETSEAT GOSTACK 09, FASE 04 -> ARQUITETURA FLUX -> VIDEO: 10 - Configurando o Redux 09:54 */

import { createStore, applyMiddleware } from 'redux';

/**EXTENSÃO REDUX no google
 * https://www.youtube.com/watch?v=IlM7497j6LY
 * https://github.com/zalmoxisus/redux-devtools-extension#usage
 */
import { composeWithDevTools } from 'redux-devtools-extension';

/**Não é possivel criar um store sem um REDUCER.

Esse cart() é um REDUCER, que retorna o estado que o cart vai iniciar. Posso usar modules.
function cart() {
    return [];
}
const store = createStore(cart); */

import rootReducer from './modules/rootReducer';
/**Esse rootReducer, é o component que contém todos os REDUCERS e uni em um só.  */



const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()));

export default store;