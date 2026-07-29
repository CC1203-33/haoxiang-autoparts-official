// EXPORTS: IAdvantage, MOCK_ADVANTAGES
export interface IAdvantage {
  id: string
  title: string
  description: string
  iconName: string
}

export const MOCK_ADVANTAGES: IAdvantage[] = [
  {
    id: '1',
    title: 'Quality Assurance',
    description: 'Strict QC standards with 100% inspection before shipment to ensure reliable product quality.',
    iconName: 'ShieldCheck',
  },
  {
    id: '2',
    title: 'Competitive Pricing',
    description: 'Direct factory sourcing from Guangzhou offers wholesale prices with excellent cost performance.',
    iconName: 'CurrencyDollar',
  },
  {
    id: '3',
    title: 'Fast Delivery',
    description: 'Efficient logistics network with multiple shipping options for global timely delivery.',
    iconName: 'Truck',
  },
  {
    id: '4',
    title: 'Wide Product Range',
    description: 'Comprehensive catalog covering engine, electrical, brake, suspension and more auto parts.',
    iconName: 'SquaresFour',
  },
  {
    id: '5',
    title: 'Professional Service',
    description: 'Experienced team provides dedicated pre-sales and after-sales support for global buyers.',
    iconName: 'Users',
  },
]