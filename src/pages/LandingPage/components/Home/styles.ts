import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const ContaienrSection = styled.section`
  padding: 8rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.device.laptopM} {
    padding: 6rem 0;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 3.5rem 0;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    padding: 2.5rem 0;
  }
`
export const ContainerPresentation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;

  @media ${({ theme }) => theme.device.tabletM} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const WrapperImage = styled(motion.div)`
  width: 100%;
  height: 25rem;

  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }

  @media ${({ theme }) => theme.device.tabletM} {
    height: 20rem;
  }
`

export const WrapperTextPresentation = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 3rem;

  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    gap: 2rem;
  }
`

const animationTextHello = keyframes`
    0% { transform: rotate(0deg); }
    100% {  transform: rotate(60deg) }
`

export const TextHello = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme['blue-500']};
  display: flex;
  gap: 0.5rem;
  span {
    display: flex;
  }
`

export const Emoji = styled.div`
  animation-name: ${animationTextHello};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`

export const TextPresentation = styled.p`
  text-align: center;
  line-height: 1.6;
  font-size: 1.25rem;
`

const animationTextStack = keyframes`
    0% { color: #FFF }
    50% { color: #E7EDF4 }
    100% {  color: #3294F8 }
`

export const TextStack = styled.strong`
  animation-name: ${animationTextStack};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

// Container Social Medias

export const ContainerMainBadges = styled(motion.div)`
  width: 100%;
  padding-top: 3rem;
`

export const ContainerBadges = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${({ theme }) => theme.device.laptopM} {
    margin-left: 15%;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    margin-left: 20%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    margin-left: 25%;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    margin-left: 0;
    gap: 4rem;
  }
`
