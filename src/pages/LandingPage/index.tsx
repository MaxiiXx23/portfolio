import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { AboutMe } from './components/AboutMe'
import { Certificates } from './components/Certificates'
import { Home } from './components/Home'
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
      </Container>
      <Footer />
    </ContainerMain>
  )
}
