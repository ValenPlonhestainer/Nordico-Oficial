import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanityClient'
import { CATALOG_PRODUCTS, type Product } from '../config/products'

const QUERY = `*[_type == "product"] | order(order asc) {
  "key": key,
  name,
  priceUnit,
  tag
}`

interface SanityProduct {
  key: string
  name: string
  priceUnit: number
  tag?: string
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(CATALOG_PRODUCTS)

  useEffect(() => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
    if (!projectId || projectId === 'TU_PROJECT_ID') return

    sanityClient
      .fetch<SanityProduct[]>(QUERY)
      .then(data => {
        if (data && data.length > 0) {
          setProducts(
            data.map(p => ({
              key: p.key,
              name: p.name,
              priceUnit: p.priceUnit,
              image: CATALOG_PRODUCTS.find(c => c.key === p.key)?.image ?? '',
              tag: p.tag,
            }))
          )
        }
      })
      .catch(() => {})
  }, [])

  return products
}
