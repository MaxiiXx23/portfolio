import { useContext } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { FaArrowRight } from 'react-icons/fa'

import { ScrollContext } from '../../../../contexts/scrollContext'
import { SelectedPage } from '../../../../shared/types'

import {
  ContainerSection,
  Title,
  ContainerMain,
  ListCertificates,
  ContainerImage,
  ContainerSelect,
  Name,
  WrapperArrow,
} from './styles'

import { dataCertificates } from '../../../../database/dataCertificates'

import CertificationSVG from '../../../../assets/Certification-Max.svg'
import { ModalCertificate } from '../../../../components/ModalCertificate'

export function Certificates() {
  const { changeSelectedPage } = useContext(ScrollContext)

  return (
    <ContainerSection id="certificates">
      <Title>Certificates</Title>

      <ContainerMain>
        <ContainerImage
          onViewportEnter={() => changeSelectedPage(SelectedPage.Certificates)}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={CertificationSVG}
            alt="Illustration-Certification"
            loading="lazy"
          />
        </ContainerImage>
        {/* Grid Select */}
        <ListCertificates
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Container Select */}
          {dataCertificates.map((certificate) => {
            return (
              <ContainerSelect key={certificate.id}>
                <Name>{certificate.title}</Name>
                {/* Wrapper ArrowRight */}
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <WrapperArrow>
                      <FaArrowRight size={16} />
                    </WrapperArrow>
                  </Dialog.Trigger>
                  <ModalCertificate
                    title={certificate.title}
                    imageUrl={certificate.imageUrl}
                    link={certificate.link}
                    code={certificate.code}
                  />
                </Dialog.Root>
              </ContainerSelect>
            )
          })}
        </ListCertificates>
      </ContainerMain>
    </ContainerSection>
  )
}
