import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import { ToastContainer, toast } from 'react-toastify';
import { HashRouter } from 'react-router-dom'
import ErrorBoundaris from './Componants/ErrorBoundaris/ErrorBoundaris.jsx'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename={process.env.PUBLIC_URL}>
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
