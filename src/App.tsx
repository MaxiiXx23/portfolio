import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/defaultTheme'
import { LandingPage } from './pages/LandingPage'

import { ScrollProvider } from './contexts/scrollContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ScrollProvider>
        <LandingPage />
      </ScrollProvider>
    </ThemeProvider>
  )
}
