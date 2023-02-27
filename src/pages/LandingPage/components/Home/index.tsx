import { useContext } from 'react'

import HandCodingSVG from '../../../../assets/HandCoding.svg'
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
} from './styles'

import { ScrollContext } from '../../../../contexts/scrollContext'
import { SelectedPage } from '../../../../shared/types'

export function Home() {
  const { changeSelectedPage } = useContext(ScrollContext)

  return (
    <ContaienrSection id="home">
      {/* Container presentation */}
      <ContainerPresentation>
        <WrapperImage
          onViewportEnter={() => changeSelectedPage(SelectedPage.Home)}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HandCodingSVG} alt="Hand Coding" loading="lazy" />
        </WrapperImage>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <WrapperTextPresentation
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
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm Max Jônatas a <TextStack>Full Stack Developer</TextStack> with
            focus in <strong>React.JS</strong>, <strong>React Native</strong>{' '}
            and <strong>Node.js</strong>.
          </TextPresentation>
        </WrapperTextPresentation>
      </ContainerPresentation>
      {/* Container badges */}
      <ContainerBadges
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        variants={{
          hidden: { opacity: 0, y: -150 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* Wrapper Badge */}
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
    </ContaienrSection>
  )
}
