import { useContext } from 'react'

import HandCodingSVG from '../../../../assets/hand-robo.png'
import ReactSVG from '../../../../assets/react-icon.svg'
import NodeSVG from '../../../../assets/node-icon.svg'
import FigmaSVG from '../../../../assets/FigmaLogo.svg'
import AWSSVG from '../../../../assets/aws-icon.svg'

import { Badge } from '../../../../components/Badge'

import {
  ContaienrSection,
  ContainerPresentation,
  WrapperImage,
  WrapperTextPresentation,
  TextPresentation,
  TextHello,
  Emoji,
  TextStack,
  ContainerBadges,
  ContainerMainBadges,
  WrapperIconsAnimation,
} from './styles'

import { ScrollContext } from '../../../../contexts/scrollContext'
import { SelectedPage } from '../../../../shared/types'

export function Home() {
  const { changeSelectedPage } = useContext(ScrollContext)

  return (
    <ContaienrSection id="home">
      <ContainerPresentation>
        <WrapperImage>
          <img src={HandCodingSVG} alt="Hand Coding" loading="lazy" />
          <WrapperIconsAnimation>
            <img src={ReactSVG} alt="React Icon" loading="lazy" />
            <img src={NodeSVG} alt="Node.js Icon" loading="lazy" />
            <img src={AWSSVG} alt="AWS Icon" loading="lazy" />
            <img src={FigmaSVG} alt="Figma Icon" loading="lazy" />
          </WrapperIconsAnimation>
        </WrapperImage>
        <WrapperTextPresentation
          onViewportEnter={() => changeSelectedPage(SelectedPage.Home)}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <TextHello>
            Hello World!
            <span>
              <Emoji>👋</Emoji>😄
            </span>
          </TextHello>
          <TextPresentation>
            I'm Max Jônatas a <TextStack>Full Stack Developer</TextStack> with
            focus in <strong>React.JS</strong>, <strong>React Native</strong>{' '}
            and <strong>Node.js</strong>.
          </TextPresentation>
        </WrapperTextPresentation>
      </ContainerPresentation>
      <ContainerMainBadges
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        variants={{
          hidden: { opacity: 0, y: -80 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ContainerBadges>
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
        </ContainerBadges>
      </ContainerMainBadges>
    </ContaienrSection>
  )
}
