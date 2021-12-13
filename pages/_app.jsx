import Head from 'next/head'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Qaraqalpaq.org</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
