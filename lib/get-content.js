import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDIR = path.join(process.cwd(), 'content')

export const getContent = fileName => {
  const file = fileName.replace(/\.md$/, '')

  const filePath = path.join(contentDIR, `${file}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return { ...data, content }
}
