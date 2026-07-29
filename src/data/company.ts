// EXPORTS: ICompany, MOCK_COMPANY
export interface ICompany {
  id: string
  name: string
  brand: string
  slogan: string
  tagline: string
  description: string
  contactPerson: string
  whatsapp: string
  tel: string
  email: string
  fax: string
  qq: string
  address: string
  alibabaStore: string
  foundedYear: number
  countriesServed: number
  productCategories: number
  happyClients: number
  logoUrl: string
  heroImageUrl: string
  aboutImageUrl: string
}

export const MOCK_COMPANY: ICompany = {
  id: '1',
  name: 'Guangzhou Haoxiang Auto Parts Co., Ltd.',
  brand: 'Hao Xiang',
  slogan: 'Professional Auto Parts Supplier from China',
  tagline: 'Quality Parts, Competitive Prices, Global Service',
  description: 'Guangzhou Haoxiang Auto Parts is a professional auto parts supplier based in Guangzhou, China. We specialize in providing high-quality automotive parts for global markets, serving importers, distributors, and trade partners worldwide with a wide range of products and reliable service.',
  contactPerson: 'Cathy Cao',
  whatsapp: '+86 13005156303',
  tel: '+86 13005156303',
  email: 'haoxiangautoparts@hotmail.com',
  fax: '(+86) 020-37365450',
  qq: '923466055',
  address: 'C07, Yiyou Auto Parts Mall, No.1540, Guangyuan East Road, Yuexiu District, Guangzhou, Guangdong, China',
  alibabaStore: 'https://haoxiangautoparts.en.alibaba.com/',
  foundedYear: 2010,
  countriesServed: 50,
  productCategories: 8,
  happyClients: 2000,
  logoUrl: '',
  heroImageUrl: '/images/hero-main.svg',
  aboutImageUrl: '/images/about-factory.svg',
}
