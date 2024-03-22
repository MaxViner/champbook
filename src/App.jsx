import React from 'react'
import './App.scss'
import { store } from './store/store'
import { AppRouter } from './routes/AppRouter'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App
