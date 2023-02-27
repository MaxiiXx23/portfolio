import { useContext } from 'react'

import { FaWhatsapp } from 'react-icons/fa'

import { NavLink } from '../NavLink'

import {
  ContainerAvatar,
  ContainerNav,
  Avatar,
  ListNav,
  BtnContact,
  ContainerMain,
} from './styles'

import { ScrollContext } from '../../contexts/scrollContext'
import { formatterMessageWhats } from '../../utils/formatterMessageWhats'

export function Header() {
  const { isTopOfPage } = useContext(ScrollContext)

  const message =
    'Olá Max Jonatas, tudo bem? Estou entrando em contato a partir do seu portfólio.'

  const messageFormatted = formatterMessageWhats(message)

  return (
    <ContainerNav>
      <ContainerMain isTopOfPage={isTopOfPage}>
        <ContainerAvatar>
          <Avatar
            src="https://avatars.githubusercontent.com/u/48772842?v=4"
            alt=""
          />
        </ContainerAvatar>
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
          <FaWhatsapp size={24} />
        </BtnContact>
      </ContainerMain>
    </ContainerNav>
  )
}
