import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import './styles/index.scss';
import { setupStore } from './app/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
