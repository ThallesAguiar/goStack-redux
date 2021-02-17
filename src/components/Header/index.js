import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/rocketshoes.svg';

function Header({ cartSize }) {
    /**Esse cart é uma propriedade que vem la de baixo, la do meu export ... connect() é o mesmo nome do objeto que ta la embaixo. 
     * Ele vai renderizar sempre o novo estado. OBS.: ele deve renderizar, pois ele não é persistente, igual o vuex.
    */

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>

            {/* Dentro desse component tem o <LINK> para poder usar o to="" */}
            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    /**esse STATE é o ESTADO TODO.
     * esse state.cart é um REDUCER. Vem do rootReducer.
     */
    cartSize: state.cart.length,
}))(Header);