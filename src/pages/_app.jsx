import '../styles/foundations/globals.scss'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { useEffect } from 'react'
import { clientSide_createStore } from '../store/store'
import { useStore } from '../store/store'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
