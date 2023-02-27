import { useLottie } from 'lottie-react'

import AstronautAnimation from '../../assets/animations/AstronautIllustration.json'

import {
  ContainerAnimation,
  ContainerSection,
  Copyright,
  ContainerSocialMedias,
} from './styles'
import { Badge } from '../Badge'

export function Footer() {
  const options = {
    animationData: AstronautAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  return (
    <ContainerSection>
      {/* Animation and Name Site */}
      <ContainerAnimation>
        {View}
        <Copyright>© 2023 Max Portfolio, all the right reserved.</Copyright>
      </ContainerAnimation>
      {/* Container Social Medias */}
      <ContainerSocialMedias>
        <Badge
          icon="FaGithub"
          text="MaxiiXx23"
          link="https://github.com/MaxiiXx23"
        />
        <Badge
          icon="FaLinkedin"
          text="max-jonatas"
          link="https://www.linkedin.com/in/max-jonatas/"
        />
        <Badge
          icon="FaInstagram"
          text="max.jonatas"
          link="https://www.instagram.com/max.jonatas/"
        />
      </ContainerSocialMedias>
    </ContainerSection>
  )
}
