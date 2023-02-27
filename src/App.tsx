import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/defaultTheme'
import { LandingPage } from './pages/LandingPage'

import { ScrollProvider } from './contexts/scrollContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ScrollProvider>
        <LandingPage />
      </ScrollProvider>
    </ThemeProvider>
  )
}
