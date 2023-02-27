import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${({ theme }) => theme.white};
`

export const Content = styled(Dialog.Content)`
  z-index: 2;
  width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    margin-top: 0.5rem;
    width: 100%;
    height: 50%;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    width: 24rem;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    width: 20rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 18rem;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    width: 16rem;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    width: 14rem;
  }
`

export const Title = styled(Dialog.DialogTitle)`
  color: ${({ theme }) => theme['blue-500']};

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 1rem;
  }
`

export const DetailsFooter = styled.footer`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;
  color: ${({ theme }) => theme.white};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme['blue-500']};
    transition: 0.3s;
  }
`

export const ContainerLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;

  @media ${({ theme }) => theme.device.mobileL} {
    align-items: flex-start;
    flex-direction: column;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    align-items: flex-start;
    flex-direction: column;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    align-items: flex-start;
    flex-direction: column;
  }
`
export const WrapperIconCopy = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 0;
  box-shadow: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-700']};

  color: ${({ theme }) => theme.white};
`
