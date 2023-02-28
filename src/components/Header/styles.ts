import styled, { css } from 'styled-components'

export const ContainerNav = styled.nav`
  top: 0;
  position: fixed;
  width: 100%;
  max-width: 100%;
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

  @media ${({ theme }) => theme.device.laptopS} {
    padding: 1rem 2rem;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    padding: 1rem 2rem;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    padding: 1rem 1.5rem;
  }
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

export const BtnMenu = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: 0;
  box-shadow: none;

  background: transparent;
  color: ${({ theme }) => theme.white};
`

export const Avatar = styled.img`
  width: 60px;
  height: 60px;

  @media ${({ theme }) => theme.device.tabletL} {
    width: 55px;
    height: 55px;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    width: 50px;
    height: 50px;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    width: 40px;
    height: 40px;
  }
`

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  list-style-type: none;

  @media ${({ theme }) => theme.device.laptopS} {
    gap: 1.5rem;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    gap: 1.5rem;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    gap: 1rem;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    gap: 0.625rem;
  }
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

  svg {
    font-size: 24px;
  }

  &:hover {
    opacity: 1;

    transition: 0.3s;
  }

  @media ${({ theme }) => theme.device.laptopS} {
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;

    svg {
      font-size: 20px;
    }
  }

  @media ${({ theme }) => theme.device.tabletL} {
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;

    svg {
      font-size: 20px;
    }
  }

  @media ${({ theme }) => theme.device.tabletM} {
    padding: 0.5rem 0.875rem;
    font-size: 0.625rem;

    svg {
      font-size: 16px;
    }
  }

  @media ${({ theme }) => theme.device.tabletS} {
    padding: 0.5rem 0.875rem;
    font-size: 0.625rem;

    svg {
      font-size: 16px;
    }
  }
`

// menu hamburguer

export const ContainerMainHamburguer = styled.nav`
  position: absolute;
  z-index: 10;
  left: 0;
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1rem 2rem;

  background: ${({ theme }) => theme['black-500']};
`

export const ContainerButtonClose = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ListMenuHamburguer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 3rem;

  list-style-type: none;
`
