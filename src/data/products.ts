// EXPORTS: IProductCategory, MOCK_PRODUCT_CATEGORIES
export interface IProductCategory {
  id: string
  name: string
  description: string
  icon: string
  imageUrl: string
  altText: string
}

export const MOCK_PRODUCT_CATEGORIES: IProductCategory[] = [
  {
    id: '1',
    name: 'Engine Parts',
    description: 'EGR valves, pistons, gaskets, timing belts, cylinder heads, camshafts, oil pumps, water pumps and more. Full range of engine components for Japanese, European & American vehicles.',
    icon: '⚙️',
    imageUrl: '/images/product-engine.svg',
    altText: 'auto engine parts pistons valves gaskets',
  },
  {
    id: '2',
    name: 'Electrical Parts',
    description: 'Oxygen sensors, ignition coils, spark plugs, alternators, starters, crankshaft sensors, camshaft sensors, window regulators and more. Complete auto electrical parts catalog.',
    icon: '⚡',
    imageUrl: '/images/product-electrical.svg',
    altText: 'auto electrical parts oxygen sensor ignition coil',
  },
  {
    id: '3',
    name: 'Brake System',
    description: 'Brake pads, brake discs, calipers, brake drums, master cylinders, wheel cylinders, ABS sensors, brake hoses and more. OE-grade quality, stable braking performance.',
    icon: '🛞',
    imageUrl: '/images/product-brake.svg',
    altText: 'brake system parts brake pads discs calipers',
  },
  {
    id: '4',
    name: 'Suspension',
    description: 'Shock absorbers, struts, control arms, ball joints, tie rod ends, stabilizer links, bushings, coil springs and more. Durable suspension components for smooth ride.',
    icon: '🔩',
    imageUrl: '/images/product-suspension.svg',
    altText: 'suspension parts shock absorbers control arms',
  },
  {
    id: '5',
    name: 'Steering System',
    description: 'Power steering pumps, steering racks, tie rods, rack ends, pitman arms, idler arms, steering columns and more. Precision engineered for accurate steering.',
    icon: '🔧',
    imageUrl: '/images/product-steering.svg',
    altText: 'steering system parts steering rack tie rod',
  },
  {
    id: '6',
    name: 'Cooling System',
    description: 'Radiators, water pumps, thermostats, cooling fans, fan clutches, radiator hoses, heater cores, expansion tanks and more. Efficient heat dissipation.',
    icon: '❄️',
    imageUrl: '/images/product-cooling.svg',
    altText: 'cooling system parts radiator water pump',
  },
  {
    id: '7',
    name: 'Diesel Fuel System',
    description: 'Diesel injection pumps, fuel injectors, injector nozzles, common rail parts, fuel filters, diesel sensors and more. Specialized in diesel engine fuel system components.',
    icon: '⛽',
    imageUrl: '/images/product-diesel.svg',
    altText: 'diesel fuel system injection pump injector nozzle',
  },
]
