import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md'

import { ProductList } from './styles';
import api from '../../services/api';

class Home extends Component {

  state = {
    products: [],
  };
  
  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        { products.map(product => (
          <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.price}</span>

          <button type="button">
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

export default Home;