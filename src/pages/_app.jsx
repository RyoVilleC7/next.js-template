import '../styles/foundations/globals.scss'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { useEffect } from 'react'
import { clientSide_createStore } from '../store/store'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    clientSide_createStore()
  })

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
