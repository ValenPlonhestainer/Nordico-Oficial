export interface Product {
  key: string
  name: string
  priceUnit: number
  image: string
  tag?: string
}

export interface Service {
  id: string
  label: string
  price: number
  type: 'unit' | 'fixed'
  priceLabel: string
}

export const CATALOG_PRODUCTS: Product[] = [
  { key: 'solarium',    name: 'SOLARIUM',            priceUnit: 7900, image: '/img/Solarium.jpg',       tag: 'MÁS POPULAR' },
  { key: 'recto',       name: 'BORDE RECTO',         priceUnit: 9800, image: '/img/Borde recto.jpg' },
  { key: 'ballena5050', name: 'BORDE BALLENA 50X50', priceUnit: 9800, image: '/img/Borde ballena.jpg' },
  { key: 'ballena4050', name: 'BORDE BALLENA 40X50', priceUnit: 9000, image: '/img/Borde ballenita.jpg' },
  { key: 'esquina',     name: 'ESQUINA',             priceUnit: 10500, image: '/img/Esquina.jpg' },
  { key: 'cuna',        name: 'BORDE ROMANO (CUÑA)', priceUnit: 6000, image: '/img/Cuña.jpg' },
]

export const SERVICES: Service[] = [
  { id: 'svc-install', label: 'Laca (5 Litros)',      price: 7000,  type: 'fixed', priceLabel: '+$7.000' },
  { id: 'svc-seal',    label: 'Cemento Blanco (5KG)', price: 12000, type: 'fixed', priceLabel: '+$12.000' },
]
