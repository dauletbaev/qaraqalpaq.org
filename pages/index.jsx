import Head from 'next/head'
import { getContent } from 'lib/get-content'
import Main from 'components/main-page'

const HomePage = props => {
  return (
    <>
      <Head>
        <title>Qaraqalpaq.org | {props.title}</title>
        <meta
          name="description"
          content="Qaraqalpaqsha ashıq kodlı baǵdarlamalar"
        />
      </Head>

      <Main {...props} />
    </>
  )
}

export default HomePage

export const getStaticProps = async () => {
  const indexContent = getContent('index.md')

  return { props: indexContent }
}
