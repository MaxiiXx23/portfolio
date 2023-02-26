import { useState, useEffect, createContext, ReactNode } from 'react'

import { SelectedPage } from '../shared/types'

interface IScrollContext {
  selectedPage: SelectedPage
  isTopOfPage: boolean
  changeSelectedPage: (page: SelectedPage) => void
}

interface IScrollContextProvider {
  children: ReactNode
}

export const ScrollContext = createContext<IScrollContext>({} as IScrollContext)

export function ScrollProvider({ children }: IScrollContextProvider) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  )

  const [isTopOfPage, setIsTopOfPage] = useState(true)

  function changeSelectedPage(page: SelectedPage) {
    setSelectedPage(page)
  }

  function handleScroll() {
    if (window.scrollY === 0) {
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if (window.scrollY !== 0) setIsTopOfPage(false)
  }

  useEffect(() => {
    document.body.style.overflowX = 'hidden'
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ScrollContext.Provider
      value={{
        selectedPage,
        isTopOfPage,
        changeSelectedPage,
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}
