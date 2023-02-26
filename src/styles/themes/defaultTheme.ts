export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '660px',
  tabletL: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
} as const

export const defaultTheme = {
  white: '#FFF',
  'blue-500': '#3294F8',

  'purple-600': '#9333ea',
  'purple-700': '#7e22ce',
  'purple-800': '#6b21a8',

  'slate-100': '#E7EDF4',

  'green-500': '#22c55e',

  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',

  'black-500': '#040F1A',

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
} as const
