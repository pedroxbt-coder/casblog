import type Author from './author'

type PostType = {
  outcomes: string
  category: any
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
