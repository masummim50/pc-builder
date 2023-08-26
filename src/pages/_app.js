import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)

  //   return getLayout(<SessionProvider session={session}>
  //     (<Component {...pageProps} />)
  //   </SessionProvider>)
  // }

  return(
  <Provider store={store}>
    <SessionProvider session={session}>
      {
        getLayout(<Component {...pageProps} />)
      }
    </SessionProvider>
  </Provider>
  )
}

