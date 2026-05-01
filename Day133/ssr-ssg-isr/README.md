
## Server-Side Rendering (SSR)
We're talking about SSR whenever your web application is to be rendered on the server before it is sent to the client. The HTML markup and JS code is generated on the server before being sent to the client browser as an HTML document every time the client requests it.

In order to implement SSR for a web page, it is necessary to create an asynchronous function called getServerSideProps on a page's file and export it. This function will then be invoked by the server upon every request.


```
export default function Page({ data }) {
  // Render your page...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```


## Static Site Generation (SSG)
SSG is a rendering strategy that generates HTML markup at build time instead of on the server or client. With SSG, the HTML markup for each page is pre-generated and served to the client as a set of static files.

Next.js uses SSG by default when your pages do not need external data.

```
function Home() {
  return <div>Hello World!</div>
}

export default Home
```

If your page needs external data, you need to add getStaticProps to your page. This function will run at build time and pass the relevant props to your component.

```
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
```

In addition to using getServerSideProps, SSR in Next.js also provides the ability to pre-render dynamic paths using getStaticPaths. With getStaticPaths, you can specify a list of paths that should be pre-rendered at build time, which can help to improve the performance of your Next.js application by reducing the number of server requests required.

```
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
```

## Incremental Static Regeneration (ISR)
Next.js 9.5 introduced Incremental Static Regeneration (ISR) as a rendering approach that offers the advantages of both SSR and SSG. With ISR, Next.js pre-generates static HTML markup at build time and incrementally re-generates the markup on the server at runtime as needed.

Unlike SSR, ISR allows for the re-generation of only the specific pages or sections of pages that have changed or expired, providing quicker updates and reducing server overhead.

Next.js implements ISR through the revalidate option in the getStaticProps function, which determines how frequently the HTML markup for a page should be re-generated on the server, in seconds. When a page is revalidated, Next.js re-generates the HTML markup, serving up-to-date content to the client without needing to rebuild the entire application.

```
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
```


## Conclusion
NextJS provides a variety of approaches to handle page rendering, from server-first to build-first, catering to the needs of different project structures.

SSR can provide improved SEO and easier implementation, but may require more server resources and causes slower page loads.
SSG can provide faster page loads and better scalability for static content, but may not be suitable for dynamic content or large data sets.
ISR can offer faster updates and improved performance for frequently changing content, but may require additional server resources and can potentially serve stale content.

Among these options, ISR stands out as a compelling choice when stale content is acceptable. By leveraging ISR, NextJS offers a unique capability to strike a balance between real-time updates and optimal performance.

In addition to the pros and cons discussed in this article, there are many more factors that can influence the choice of your rendering strategy in Next.js. For example, the specific technical requirements of your application, the available server resources and hosting options, and the expertise and preferences of your development team can all play a role in determining which strategy is the best fit.

By taking the time to fully understand the technical and business implications of each rendering strategy and exploring additional dive deeper points, you can make an informed decision that delivers the best possible user experience and performance for your Next.js application.