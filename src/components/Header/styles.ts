import styled, { css } from 'styled-components'

export const ContainerNav = styled.nav`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
`

interface IContainerMain {
  isTopOfPage: boolean
}

export const ContainerMain = styled.div<IContainerMain>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 3rem;
  background: ${({ theme, isTopOfPage }) =>
    isTopOfPage
      ? css`
      linear-gradient(
      to left right,
      ${({ theme }) => theme['gray-900']},
      ${({ theme }) => theme['purple-600']}
    )
    `
      : css`
        linear-gradient(
        to bottom right,
        ${({ theme }) => theme['gray-800']},
        ${({ theme }) => theme['purple-800']}
    )
      `};
`

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  background: linear-gradient(
      to bottom right,
      ${({ theme }) => theme['blue-500']},
      ${({ theme }) => theme['purple-700']}
    )
    border-box;
  border-radius: 50%;
  overflow: hidden;
`

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
`

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  list-style-type: none;
`

export const BtnContact = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  opacity: 0.8;

  box-shadow: none;
  border: 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme['green-500']};

  color: ${({ theme }) => theme.white};
  font-weight: bold;
  line-height: 1.4;
  text-decoration: none;

  &:hover {
    opacity: 1;

    transition: 0.3s;
  }
`
