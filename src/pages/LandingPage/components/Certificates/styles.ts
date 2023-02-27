import styled from 'styled-components'

import { motion } from 'framer-motion'

export const ContainerSection = styled.section`
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

export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media ${({ theme }) => theme.device.tabletL} {
    flex-direction: column;
  }
`

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme['blue-500']};

  @media ${({ theme }) => theme.device.tabletL} {
    margin-bottom: 0rem;
  }
`

export const ContainerImage = styled(motion.div)`
  width: 100%;
  height: 25rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    height: 20rem;
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

  @media ${({ theme }) => theme.device.tabletL} {
    margin-top: 0rem;
  }
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

  @media ${({ theme }) => theme.device.laptopS} {
    width: 20rem;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 18rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 15rem;
  }
`

export const Name = styled.strong`
  line-height: 1.6;

  @media ${({ theme }) => theme.device.laptopS} {
    font-size: 0.875rem;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    font-size: 0.75rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 0.625rem;
  }
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
