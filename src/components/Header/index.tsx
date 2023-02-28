import { useContext, useState } from 'react'

import { useTheme } from 'styled-components'

import { TfiClose } from 'react-icons/tfi'
import { FaBars, FaWhatsapp } from 'react-icons/fa'

import { NavLink } from '../NavLink'

import {
  ContainerAvatar,
  ContainerNav,
  BtnMenu,
  Avatar,
  ListNav,
  BtnContact,
  ContainerMain,
  ContainerMainHamburguer,
  ListMenuHamburguer,
  ContainerButtonClose,
} from './styles'

import { ScrollContext } from '../../contexts/scrollContext'
import { formatterMessageWhats } from '../../utils/formatterMessageWhats'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export function Header() {
  const [isOpenMenuHamburguer, setIsOpenMenuHumburguer] = useState(false)

  const theme = useTheme()

  const { isTopOfPage } = useContext(ScrollContext)
  const isAboveMediumScreen = useMediaQuery(theme.device.tabletS)

  function handleOpenMenuHamburguer() {
    setIsOpenMenuHumburguer((state) => !state)
  }

  const message =
    'Olá Max Jonatas, tudo bem? Estou entrando em contato a partir do seu portfólio.'

  const messageFormatted = formatterMessageWhats(message)

  return (
    <ContainerNav>
      {isOpenMenuHamburguer && isAboveMediumScreen ? (
        <ContainerMainHamburguer>
          <ContainerButtonClose>
            <ContainerAvatar>
              <Avatar
                src="https://avatars.githubusercontent.com/u/48772842?v=4"
                alt=""
              />
            </ContainerAvatar>
            <BtnMenu onClick={handleOpenMenuHamburguer}>
              <TfiClose size={18} />
            </BtnMenu>
          </ContainerButtonClose>
          <ListMenuHamburguer>
            <NavLink page="Home" />
            <NavLink page="About Me" />
            <NavLink page="Skills" />
            <NavLink page="Certificates" />
            <NavLink page="Send Email" />
            <BtnContact
              href={`https://wa.me/5511983716296?text=${messageFormatted}`}
              target="__blank"
            >
              Contact on WhatsApp
              <FaWhatsapp />
            </BtnContact>
          </ListMenuHamburguer>
        </ContainerMainHamburguer>
      ) : (
        <ContainerMain isTopOfPage={isTopOfPage}>
          <ContainerAvatar>
            <Avatar
              src="https://avatars.githubusercontent.com/u/48772842?v=4"
              alt=""
            />
          </ContainerAvatar>
          {isAboveMediumScreen ? (
            <BtnMenu onClick={handleOpenMenuHamburguer}>
              <FaBars size={18} />
            </BtnMenu>
          ) : (
            <>
              <ListNav>
                <NavLink page="Home" />
                <NavLink page="About Me" />
                <NavLink page="Skills" />
                <NavLink page="Certificates" />
                <NavLink page="Send Email" />
              </ListNav>
              <BtnContact
                href={`https://wa.me/5511983716296?text=${messageFormatted}`}
                target="__blank"
              >
                Contact on WhatsApp
                <FaWhatsapp />
              </BtnContact>
            </>
          )}
        </ContainerMain>
      )}
    </ContainerNav>
  )
}
