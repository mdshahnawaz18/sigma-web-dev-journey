import React from 'react'

export default function Recipes({ recipes }) {
  // Render recipes...
}


// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get recipes
  const res = await fetch('https://.../recipes')
  const recipes = await res.json()

  // The Recipes component will receive `recipes` as a prop at build time
  return {
    props: {
      recipes,
    },
  }
}


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const res = await fetch('https://.../products')
  const products = await res.json()

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { id: product.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}