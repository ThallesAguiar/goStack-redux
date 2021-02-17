import { BrowserRouter } from 'react-router-dom';

/** Provider deixa disponivel o store da aplicação para todos os components*/
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
