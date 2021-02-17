import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
/**Conecta o component com o estado do REDUX. 
 * Connects a React component to a Redux store. */
import { connect } from 'react-redux';

class Home extends Component {

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    /** IMPORTANTE: Qual a lógica aqui.
    Se eu colocar esta função para formatar o price no render, <span>formatPrice({product.price})</span>
    ela será executada em cada produto, o que fará ele ser renderizado em cada produto, o que pode acontecer uma pequena perda de performance.
    E aqui ele será chamado na renderização inicial e o valor já sairá formatado.
    
    CUIDADO: cuidado ao colocar funções no render, sempre que possivel, colocar em função fora do render.
    */
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    /**Todo component que usa o connect, recebe uma propriedade chamada dispath, que dispara uma action ao REDUX.
     * Se não expecificar o tipo de reducer, TODOS os reducers da aplicação serão ativados.
     */
    // const { dispatch } = this.props;
    // dispatch(CartActions.addToCart(product));
    
    const { addToCart } = this.props;
    addToCart(product);
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        { products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => this.handleAddProduct(product)}>
              <div>
                <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}

      </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions,dispatch)

/**connect() retorna outra função e passa o nome do component */
export default connect(null, mapDispatchToProps)(Home);