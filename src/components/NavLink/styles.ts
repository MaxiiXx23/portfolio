import styled from 'styled-components'

interface IContainerLink {
  pageCurrentIsSelected: boolean
}

export const ContainerLink = styled.li<IContainerLink>`
  cursor: pointer;

  a {
    font-weight: bold;
    font-size: 1.125rem;
    opacity: 0.8;
    border-bottom: 2px solid
      ${({ theme, pageCurrentIsSelected }) =>
        pageCurrentIsSelected ? theme['blue-500'] : 'transparent'};
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }
`
