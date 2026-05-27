import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { CATALOG_PRODUCTS, type Product } from '../config/products'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(CATALOG_PRODUCTS)

  useEffect(() => {
    if (!supabase) return

    supabase
      .from('products')
      .select('key, name, price_unit, tag, order')
      .order('order', { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return
        setProducts(
          data.map(p => ({
            key: p.key,
            name: p.name,
            priceUnit: p.price_unit,
            image: CATALOG_PRODUCTS.find(c => c.key === p.key)?.image ?? '',
            tag: p.tag ?? undefined,
          }))
        )
      })
  }, [])

  return products
}
