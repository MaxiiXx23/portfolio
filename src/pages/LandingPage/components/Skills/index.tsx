import { useContext } from 'react'

import {
  Card,
  ContainerImage,
  ContainerMain,
  ContainerSection,
  Title,
  ListSkills,
} from './styles'

import CodingSVG from '../../../../assets/Coding.svg'

import { ScrollContext } from '../../../../contexts/scrollContext'
import { SelectedPage } from '../../../../shared/types'

export function Skills() {
  const { changeSelectedPage } = useContext(ScrollContext)

  return (
    <ContainerSection id="skills">
      {/* GRID Cards */}
      <Title>My Skills</Title>
      <ContainerMain>
        <ContainerImage
          onViewportEnter={() => changeSelectedPage(SelectedPage.Skills)}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={CodingSVG} alt="Illustration System" loading="lazy" />
        </ContainerImage>
        <ListSkills
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Card */}
          <Card>
            {/* Image */}
            <img
              alt="JavaScript"
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="TypeScript"
              src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="ReactJS"
              src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="React-Native"
              src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="Node.Js"
              src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="Express"
              src="https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=express"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="HTML"
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="CSS3"
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="Git"
              src="https://img.shields.io/badge/Git-dc2626?style=for-the-badge&logo=Git&logoColor=white"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="Github"
              src="https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=Github&logoColor=white"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="Next.js"
              src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="Expo"
              src="https://img.shields.io/badge/Expo-cbd5e1?style=for-the-badge&logo=Expo&logoColor=black"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="React Hook Form"
              src="https://img.shields.io/badge/react%20hook%20form-db2777?style=for-the-badge&logo=react-hook-form&logoColor=white"
              loading="lazy"
            />
          </Card>
          <Card>
            {/* Image */}
            <img
              alt="styled-components"
              src="https://img.shields.io/badge/Styled%20Components-fb7185?style=for-the-badge&logo=styled-components&logoColor=white"
              loading="lazy"
            />
          </Card>
        </ListSkills>
      </ContainerMain>
    </ContainerSection>
  )
}
