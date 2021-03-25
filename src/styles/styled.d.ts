import theme from 'styles/theme'

/*
 eslint-disable
 @typescript-eslint/no-empty-interface
*/
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
