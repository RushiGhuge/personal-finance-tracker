import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter } from 'react-router-dom'
import ErrorBoundaris from './Componants/ErrorBoundaris/ErrorBoundaris.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <ErrorBoundaris>
        <ToastContainer autoClose={600}/>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundaris>
    </React.StrictMode>
  </HashRouter>
)
