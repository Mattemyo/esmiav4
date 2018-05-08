import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { polyfillLoader } from 'polyfill-io-feature-detection';
import 'tachyons';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// This function load polyfills only if needed. By default it uses polyfill.io

// That function will be called after loading polyfills

function main() {
  render(
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

//  render(
//     <BrowserRouter>
//       <Route component={App} />
//     </BrowserRouter>,
//     document.getElementById('root')
//   );

polyfillLoader({
  features: 'Promise,es6',
  onCompleted: main
});

registerServiceWorker();
