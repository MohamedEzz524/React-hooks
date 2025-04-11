import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
// import App from './useRef/App';  //unComment this only to work useRef()
// import App from './useReducer/App'; //unComment this only to work useReducer()
// import App from './useCallback/App'; //unComment this only to work useCallback()
// import App from './useMemo/App'; //unComment this only to work useCallback()
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

