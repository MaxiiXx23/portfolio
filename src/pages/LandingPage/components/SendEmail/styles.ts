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

export const Title = styled.h1`
  color: ${({ theme }) => theme['blue-500']};
  margin-bottom: 2rem;
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
  height: 24.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 2rem;

  div {
    width: 100%;
    height: 100%;
  }
`

export const ContainerForm = styled(motion.form)`
  width: 30rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;

  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 8px;

  gap: 2rem;
`
export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`
export const Input = styled.input`
  width: 71%;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.white};
  border: 0;
  border-radius: 8px;
  box-shadow: none;

  font-weight: bold;
  color: ${({ theme }) => theme['black-500']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const LabelTextArea = styled.label`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  gap: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`
export const TextArea = styled.textarea`
  resize: none;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.white};
  border: 0;
  border-radius: 8px;
  box-shadow: none;

  font-weight: bold;
  color: ${({ theme }) => theme['black-500']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const BtnSendEmail = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0.5rem 1rem;

  border: 0;
  box-shadow: none;
  border-radius: 8px;

  background: ${({ theme }) => theme['blue-500']};

  font-weight: bold;
  color: ${({ theme }) => theme.white};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`
