import React from 'react'

export async function getStaticProps() {
  const res = await fetch('https://.../recipes')
  const recipes = await res.json()

  return {
    props: {
      recipes,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 seconds
    revalidate: 30, // In seconds
  }
}