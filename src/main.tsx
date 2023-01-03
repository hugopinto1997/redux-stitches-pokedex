import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import App from 'App';
import store from 'app/store';
import { ScrollToTop } from 'components/ui/helpers';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Provider store={store}>
          <ScrollToTop />
          <App />
        </Provider>
      </QueryParamProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
