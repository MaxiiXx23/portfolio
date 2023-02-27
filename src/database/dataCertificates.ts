import DiplomaNodeRocketseatPNG from '../assets/certificates/diplomaNodejs.png'
import DiplomaReactNativeRocketseatPNG from '../assets/certificates/diplomaReactNative.png'
import DiplomaFigmaRocketseatPNG from '../assets/certificates/cursoFigma.png'
import DiplomaETEC from '../assets/certificates/certificadoETECEdited.jpg'

interface ICertificate {
  id: string
  title: string
  imageUrl: string
  link?: string
  code?: string
}

export const dataCertificates: ICertificate[] = [
  {
    id: '879f7423-7a70-4e92-8991-7fe18825201c',
    title: 'Técnico em Desenvolvimento de Sistemas',
    imageUrl: DiplomaETEC,
  },
  {
    id: '166c43ab-e532-409b-8b01-b0f231b6d470',
    title: 'Trilha Node.js Rocketseat',
    imageUrl: DiplomaNodeRocketseatPNG,
    link: 'https://app.rocketseat.com.br/certificates',
    code: '7cf164d9-a2b8-405d-ade7-476b0533a9bc',
  },
  {
    id: '52f100d3-0143-431c-9352-34d7beae5c02',
    title: 'Trilha React Native Rocketseat',
    imageUrl: DiplomaReactNativeRocketseatPNG,
    link: 'https://app.rocketseat.com.br/certificates',
    code: '1f8b8849-ae05-454e-a06c-146fc3818ab4',
  },
  {
    id: 'cd9a404b-652c-42dc-aa67-905d6b18e96e',
    title: 'Curso Figma Rocketseat',
    imageUrl: DiplomaFigmaRocketseatPNG,
    link: 'https://app.rocketseat.com.br/certificates',
    code: '1e7dde8f-eaa9-425a-804d-b85e92017820',
  },
]
