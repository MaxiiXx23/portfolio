import { useContext, useState, useEffect } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import { SelectedPage } from '../../shared/types'
import { ScrollContext } from '../../contexts/scrollContext'
import { ContainerLink } from './styles'

interface IProps {
  page: string
}

export function NavLink({ page }: IProps) {
  const { selectedPage, changeSelectedPage } = useContext(ScrollContext)

  const [pageCurrentIsSelected, setPageCurrentIsSelected] = useState(true)

  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage

  useEffect(() => {
    const isPageCurrent = selectedPage === lowerCasePage
    setPageCurrentIsSelected(isPageCurrent)
  }, [selectedPage, lowerCasePage])

  return (
    <ContainerLink pageCurrentIsSelected={pageCurrentIsSelected}>
      <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={() => changeSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </ContainerLink>
  )
}
