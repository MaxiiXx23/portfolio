import styled from 'styled-components'

export const ContainerSection = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media ${({ theme }) => theme.device.tabletS} {
    flex-direction: column-reverse;
  }
`
export const ContainerAnimation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 2rem;

  div {
    width: 10rem;
    height: 10rem;
  }
`

export const Copyright = styled.strong`
  text-align: center;
`

export const ContainerSocialMedias = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`
