import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    :focus {
        outline: 0;
        box-shadow: none;
    }
    body{
        background: linear-gradient(
      to bottom right,
      ${({ theme }) => theme['gray-900']},
      ${({ theme }) => theme['purple-600']}
    )
    border-box;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme['slate-100']};

        ::-webkit-scrollbar {
            width: 4px;
            background-color: #111827;
        }

        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px;
            border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: #1f2937;
            border-radius: 8px;
        }

        ::-webkit-scrollbar-button {
            background: #fff;
            width: 0.25rem;
        }
    }
`
