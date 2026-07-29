// EXPORTS: IBrand, MOCK_BRANDS
export interface IBrand {
  id: string
  name: string
  logoUrl: string
}

export const MOCK_BRANDS: IBrand[] = [
  {
    id: '1',
    name: 'Ford',
    logoUrl: '/images/brands/ford.svg',
  },
  {
    id: '2',
    name: 'Volkswagen',
    logoUrl: '/images/brands/volkswagen.svg',
  },
  {
    id: '3',
    name: 'Mercedes-Benz',
    logoUrl: '/images/brands/mercedes.svg',
  },
  {
    id: '4',
    name: 'BMW',
    logoUrl: '/images/brands/bmw.svg',
  },
  {
    id: '5',
    name: 'Toyota',
    logoUrl: '/images/brands/toyota.svg',
  },
  {
    id: '6',
    name: 'Honda',
    logoUrl: '/images/brands/honda.svg',
  },
  {
    id: '7',
    name: 'Mitsubishi',
    logoUrl: '/images/brands/mitsubishi.svg',
  },
  {
    id: '8',
    name: 'ISUZU',
    logoUrl: '/images/brands/isuzu.svg',
  },
  {
    id: '9',
    name: 'Renault',
    logoUrl: '/images/brands/renault.svg',
  },
]