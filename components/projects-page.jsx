import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import styles from 'styles/projects-page.module.scss'

const config = {
  a({ children, href }) {
    if (href.match(/^\//gi))
      return (
        <Link href={href}>
          <a className={styles.link}>{children}</a>
        </Link>
      )
    return <a href={href}>{children}</a>
  },
  p({ children, node }) {
    const isLink = node?.children?.[0]?.children?.[0]?.tagName === 'img'
    return <p className={isLink ? styles.badge : null}>{children}</p>
  },
}

const ProjectsPage = ({ content }) => {
  return (
    <div className={styles.content}>
      <ReactMarkdown components={config}>{content}</ReactMarkdown>
    </div>
  )
}

export default ProjectsPage
