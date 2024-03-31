import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      headline: {
        primary: string
        secondary: string
      }
      text: {
        primary: string
        secondary: string
        tertiary: string
      }
      bg: {
        dark: string
        light: string
      }
      button: {
        primary: string
        secondary: string
      }
    }
    header: {
      height: string
    }
  }
}
