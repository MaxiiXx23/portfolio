import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { AboutMe } from './components/AboutMe'
import { Certificates } from './components/Certificates'
import { Home } from './components/Home'
import { SendEmail } from './components/SendEmail'
import { Skills } from './components/Skills'
import { Container, ContainerMain } from './styles'

export function LandingPage() {
  return (
    <ContainerMain>
      <Header />
      <Container>
        <Home />
        <AboutMe />
        <Skills />
        <Certificates />
        <SendEmail />
      </Container>
      <Footer />
    </ContainerMain>
  )
}
