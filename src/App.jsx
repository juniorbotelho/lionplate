import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyle'
import theme from 'styles/theme'

// Containers
import Boilerplate from 'containers/Boilerplate'

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Boilerplate />
	</ThemeProvider>
)

export default App
