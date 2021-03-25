import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyle'
import theme from 'styles/theme'

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<h1>Boilerplate</h1>
	</ThemeProvider>
)

export default App
