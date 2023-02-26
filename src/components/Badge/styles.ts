import styled, { keyframes } from 'styled-components'

const animationBadge = keyframes`
    0% { transform: translateX(-12px); opacity: 0 }
    50% { transform: translateX(-12px); opacity: 0.5 }
    100% {  transform: translateX(0px); opacity: 1 }
`

export const WrapperBadge = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;

  text-decoration: none;
  color: ${({ theme }) => theme.white};
  strong {
    z-index: -1;
    opacity: 0;
    font-size: 1.125rem;
  }

  &:hover {
    strong {
      animation: ${animationBadge} 1s linear;
      opacity: 1;
    }
  }
`
