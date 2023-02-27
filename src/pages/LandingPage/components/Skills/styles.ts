import styled from 'styled-components'

import { motion } from 'framer-motion'

export const ContainerSection = styled.section`
  width: 100%;
  padding: 8rem 0rem;
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

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme['blue-500']};

  @media ${({ theme }) => theme.device.tabletM} {
    margin-bottom: 1rem;
  }
`

export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media ${({ theme }) => theme.device.tabletM} {
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
    height: 16rem;
  }
`

export const ListSkills = styled(motion.div)`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;
  gap: 1rem;
  row-gap: 1rem;

  @media ${({ theme }) => theme.device.tabletM} {
    grid-template-columns: auto;
    margin-top: 1rem;
  }
`

export const Card = styled.div`
  border-radius: 6px;
  overflow: hidden;
  height: 2rem;
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
  @media ${({ theme }) => theme.device.tabletM} {
    height: 2rem;
  }
`
