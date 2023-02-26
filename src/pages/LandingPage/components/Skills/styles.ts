import styled from 'styled-components'

import { motion } from 'framer-motion'

export const ContainerSection = styled.section`
  width: 100%;
  padding: 8rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme['blue-500']};
`

export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ContainerImage = styled(motion.div)`
  width: 100%;
  height: 25rem;

  img {
    width: 100%;
    height: 100%;
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
`

export const Card = styled.div`
  border-radius: 6px;
  overflow: hidden;
  height: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`
