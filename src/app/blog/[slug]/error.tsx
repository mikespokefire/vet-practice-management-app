'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main>
      <h1>Blog post not found</h1>
      <p>
        Try going back to the <Link href="/blog">Blog</Link> to find the post you were looking for
      </p>
    </main>
  )
}
