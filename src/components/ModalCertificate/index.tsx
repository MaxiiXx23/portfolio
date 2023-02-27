import * as Dialog from '@radix-ui/react-dialog'
import { TfiClose } from 'react-icons/tfi'
import { FaArrowRight, FaCopy } from 'react-icons/fa'

import {
  Overlay,
  CloseButton,
  Content,
  Title,
  DetailsFooter,
  Link,
  ContainerLabel,
  WrapperIconCopy,
} from './styles'

interface IModalCertificateProps {
  title: string
  imageUrl: string
  link?: string
  code?: string
}

export function ModalCertificate({
  title,
  imageUrl,
  link,
  code,
}: IModalCertificateProps) {
  function handleCopyCode() {
    const code = document.getElementById('code')
    const value = code!.innerHTML
    navigator.clipboard.writeText(value)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>{title}</Title>
        <CloseButton>
          <TfiClose size={16} />
        </CloseButton>
        <img src={imageUrl} alt="" />
        <DetailsFooter>
          {link ? (
            <>
              <Link href={link} target="__blank">
                See on the official site
                <FaArrowRight size={16} />
              </Link>
              <ContainerLabel>
                Code of the certificate:
                <span id="code">{code}</span>
                <WrapperIconCopy onClick={handleCopyCode}>
                  <FaCopy size={16} />
                </WrapperIconCopy>
              </ContainerLabel>
            </>
          ) : null}
        </DetailsFooter>
      </Content>
    </Dialog.Portal>
  )
}
