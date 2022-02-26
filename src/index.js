import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackgroundProvider from './hooks/background';
import ContentProvider from './hooks/contentid';

ReactDOM.render(
  <ContentProvider>
    <BackgroundProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </BackgroundProvider>
  </ContentProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
