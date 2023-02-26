import styled from 'styled-components'

import { motion } from 'framer-motion'

export const ContainerSection = styled.section`
  padding: 8rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme['blue-500']};
`

export const ContainerImage = styled(motion.div)`
  width: 100%;
  height: 25rem;

  img {
    width: 100%;
    height: 100%;
  }
`

export const ListCertificates = styled(motion.ul)`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
`

export const ContainerSelect = styled.li`
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme['slate-100']};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  flex-wrap: nowrap;

  color: ${({ theme }) => theme['black-500']};
`

export const Name = styled.strong`
  line-height: 1.6;
`
export const WrapperArrow = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['black-500']};
`
