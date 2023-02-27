import { useContext } from 'react'

import { ScrollContext } from '../../../../contexts/scrollContext'
import { SelectedPage } from '../../../../shared/types'

import {
  ContainerSection,
  ContainerAbout,
  ContainerImage,
  ContainerMainText,
  Title,
  ContainerText,
  ListSkills,
} from './styles'

import AttributionModelingSVG from '../../../../assets/AttributionModeling.svg'

export function AboutMe() {
  const { changeSelectedPage } = useContext(ScrollContext)

  return (
    <ContainerSection id="aboutme">
      <ContainerAbout>
        {/* Container Image */}
        <ContainerImage
          onViewportEnter={() => changeSelectedPage(SelectedPage.AboutMe)}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={AttributionModelingSVG}
            alt="Image Person Coding"
            loading="lazy"
          />
        </ContainerImage>
        <ContainerMainText
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Title>Who am I?</Title>

          <ContainerText>
            <p>
              I'm Max Jônatas, i have got 23 years old. Graduated Technician in
              Systems Development by ETEC in 2020, at the moment I'm on 1°
              semester in Analysis and systems development by Uninter and
              student of Rocketseat too. I'm Full Stack developer focused in
              React.JS, React Native and Node.js, working specifically with
              Typescript.
            </p>
            <p>My Soft Skills are:</p>
            <ListSkills>
              <li>Communication 🙋‍♂️</li>
              <li>Team work 🤝</li>
              <li>Problem solving 💡</li>
              <li>Time management ⏲️</li>
            </ListSkills>
          </ContainerText>
        </ContainerMainText>
      </ContainerAbout>
    </ContainerSection>
  )
}
