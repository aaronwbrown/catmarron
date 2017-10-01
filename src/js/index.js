import React  from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { AppContainer } from 'react-hot-loader'

const render = () => {
  ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
)
}

render()

if (module.hot) {
  module.hot.accept('./components/app', () => { render() })
}
