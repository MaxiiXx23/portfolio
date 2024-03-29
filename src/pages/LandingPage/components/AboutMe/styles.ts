import styled from 'styled-components'

import { motion } from 'framer-motion'

export const ContainerSection = styled.section`
  padding: 8rem 0rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.device.laptopM} {
    padding: 6rem 0;
  }

  @media ${({ theme }) => theme.device.laptopS} {
    width: 90%;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 3.5rem 0;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    padding: 2.5rem 0;
  }
`

export const ContainerAbout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media ${({ theme }) => theme.device.tabletL} {
    flex-direction: column;
  }
`

export const ContainerImage = styled(motion.div)`
  width: 100%;
  height: 25rem;

  img {
    width: 100%;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.tabletM} {
    height: 20rem;
  }
`
export const ContainerMainText = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  p {
    text-align: justify;
    line-height: 1.4;
  }

  @media ${({ theme }) => theme.device.laptopS} {
    width: 90%;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    gap: 1rem;
  }
`
export const Title = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme['blue-500']};
`
export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`
export const ListSkills = styled.ul`
  margin-left: 2rem;
`
