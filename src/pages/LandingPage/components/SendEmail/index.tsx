import { useContext, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useLottie } from 'lottie-react'

import { ScrollContext } from '../../../../contexts/scrollContext'
import { SelectedPage } from '../../../../shared/types'

import {
  ContainerSection,
  Title,
  ContainerMain,
  ContainerForm,
  Label,
  Input,
  TextArea,
  BtnSendEmail,
  LabelTextArea,
  ContainerImage,
} from './styles'

import AnimationEmail from '../../../../assets/animations/AnimationEmail.json'

interface IFormInputs {
  email: string
  name: string
  message: string
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('E-mail is required.'),
    name: yup.string().max(80).required('Name is required.'),
    message: yup.string().max(200).required('Message is required.'),
  })
  .required()

export function SendEmail() {
  const { changeSelectedPage } = useContext(ScrollContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  })

  const options = {
    animationData: AnimationEmail,
    loop: true,
  }

  const { View } = useLottie(options)

  function handleSubmitEmail(data: IFormInputs) {
    console.log(data)
    reset()
  }

  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else if (errors.name) {
      toast.error(errors.name.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else if (errors.message) {
      toast.error(errors.message.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }, [errors])

  return (
    <ContainerSection id="sendemail">
      <Title>Send E-mail</Title>
      <ContainerMain>
        {/* Container Image */}
        <ContainerImage
          onViewportEnter={() => changeSelectedPage(SelectedPage.SendEmail)}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {View}
        </ContainerImage>
        <ContainerForm
          onSubmit={handleSubmit(handleSubmitEmail)}
          action="https://formsubmit.co/max.232017@gmail.com"
          method="POST"
          onViewportEnter={() => changeSelectedPage(SelectedPage.SendEmail)}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Label>
            E-mail:{' '}
            <Input
              type="email"
              {...register('email')}
              placeholder="Your E-mail"
              autoComplete="off"
              required
            />
          </Label>
          <Label>
            Name:{' '}
            <Input
              type="text"
              {...register('name')}
              placeholder="Your Name"
              autoComplete="off"
              required
            />
          </Label>
          <LabelTextArea>
            Message:
            <TextArea
              {...register('message')}
              placeholder="Write your message to me"
              rows={8}
              cols={32}
              required
            />
          </LabelTextArea>
          <BtnSendEmail type="submit" disabled={isSubmitting}>
            Send
          </BtnSendEmail>
        </ContainerForm>
      </ContainerMain>
    </ContainerSection>
  )
}
