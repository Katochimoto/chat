import './sprite'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '@/components/App'
import store from '@/data/store'

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'))

// @if NODE_ENV='production'
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  })
}
// @endif
