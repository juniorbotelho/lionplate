import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/globalStyle'
import theme from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]
