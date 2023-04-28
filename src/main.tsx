import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import App from './App.tsx'

import { pokemonsReducer } from './reducers/pokemons.ts'
import { Provider } from 'react-redux'

import 'antd/dist/reset.css'

const composeAlt = (window as any).__REDUX_DEVTOOLS_EXTENSION__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk))



const store = createStore(pokemonsReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
