import React from 'react'

export default function Layout({ children, asHtml }) {
  if (!asHtml && children) return <main id="main">{children}</main>

  if (asHtml && !children)
    return <main id="main" dangerouslySetInnerHTML={{ __html: asHtml }}></main>

  return (
    <>
      <main id="main" dangerouslySetInnerHTML={{ __html: asHtml }}></main>
      <>{children}</>
    </>
  )
}
