import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import styles from 'styles/main-page.module.scss'

const config = {
  a({ children, href }) {
    if (href.match(/^\//gi))
      return (
        <Link href={href}>
          <a className={styles.link}>{children}</a>
        </Link>
      )
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  },
  p({ children, node }) {
    const isLink = node?.children?.[0]?.children?.[0]?.tagName === 'img'
    return <p className={isLink ? styles.images : null}>{children}</p>
  },
}

const MainPage = ({ content }) => {
  return (
    <div className={styles.content}>
      <ReactMarkdown components={config}>{content}</ReactMarkdown>
    </div>
  )
}

export default MainPage
