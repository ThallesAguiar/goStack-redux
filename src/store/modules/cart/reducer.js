export default function cart(state = [], action) {
    // todo REDUCER por PADRÃO recebe uma variavel state e action
    // ACTION carrega a ação que algum component ta chamando, por exemplo no ADD_TO_CART.
    // STATE é o valor anterior, antes da mudança que a action ta chamando.
    
    /**TODO REDUCER VAI TER UMA CARA PARECIDA 
     * sempre vai ter um switch() através da action.type
    */
   switch(action.type){
        case 'ADD_TO_CART':
       return [...state, action.product];

       default:
           return state;
   }
   /**Quando for chamado os reducers, ele vai ver o qual type é, para que não precise chamar todos os reducers que não precisam.
    * E caso ele passe por aqui e veja que não tem o type que ta pedindo, ele vai me retornar o ESTADO atual, traduzindo, ele não vai mutar nada.
    * E caso ele seja o type requisitado, ele vai pegar o que tem no ESTADO ATUAL, guardar num vetor e guardar o valor enviado.
    */
}