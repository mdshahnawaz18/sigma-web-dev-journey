import React from 'react'
import ProductClient from './ProductClient/page'

const Product = async ({params}) => {

    const prodid = await params
    const productId = prodid.id

  return <ProductClient productId={productId} />
}

export default Product
