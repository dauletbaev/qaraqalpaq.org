import Link from 'next/link'

import styles from 'styles/404.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2>Siz izlegen bet tabılmadı</h2>
      <Link href="/" replace>
        <a>Bas betke qaytıw</a>
      </Link>
    </div>
  )
}

export default NotFoundPage
