import styled from 'styled-components';

// este POLISHED ele é uma lib JS que trabalha com cores. 
// Posso pegar uma cor especifica e trabalhar com ela.
// No exemplo abaixo, vou escurecer uma cor através de uma função.
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
      display: flex;
      flex-direction: column;
      background: #FFF;
      border-radius: 4px;
      padding: 20px;

      img {
          align-self: center;
          max-width: 250px;
      }

      /* " > " quer dizer que só vai afetar a tag strong que ta somente dentro da tag LI.
      Assim não vaza para outras tags STRONGs. */
      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      button {
          background: #008080;
          color: #FFF;
          border: 0;
          border-radius: 4px;
          overflow: hidden;
          margin-top: auto;

          display: flex;
          align-items: center;
          transition: background 0.2s;

          &:hover {
              background: ${darken(0.03, '#008080')};
          }

          div {
              display: flex;
              align-items: center;
              padding: 12px;
              background: rgba(0,0,0,0.1);

              svg {
                  margin-right: 5px;
              }
          }

          span {
              flex: 1;
              text-align: center;
              font-weight: bold;
          }
      }
  }
`;
