import Head from 'next/head'
import { getContent } from 'lib/get-content'
import Projects from 'components/projects-page'

const ProjectsPage = props => {
  return (
    <>
      <Head>
        <title>Qaraqalpaq.org | Proektler</title>
        <meta name="description" content="Barlıq proektler" />
      </Head>

      <Projects {...props} />
    </>
  )
}

export default ProjectsPage

export const getStaticProps = async () => {
  const indexContent = getContent('projects.md')

  return { props: indexContent }
}
