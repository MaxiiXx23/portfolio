import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { WrapperBadge } from './styles'

type Icon = 'FaGithub' | 'FaInstagram' | 'FaLinkedin'

interface IBadgeProps {
  icon: Icon
  text: string
  link: string
}

const Icons = {
  FaGithub: <FaGithub size={24} />,
  FaInstagram: <FaInstagram size={24} />,
  FaLinkedin: <FaLinkedin size={24} />,
}

export function Badge({ icon, text, link }: IBadgeProps) {
  return (
    <WrapperBadge href={link} target="_blank">
      {Icons[icon]}
      <strong>{text}</strong>
    </WrapperBadge>
  )
}
