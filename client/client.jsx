import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../app/Routes.jsx'

function App() {
  return (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  )
}

ReactDOM.hydrate(<App />, document.querySelector('#app'))
