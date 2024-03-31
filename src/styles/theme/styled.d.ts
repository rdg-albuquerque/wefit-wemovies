import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textPrimary: string
      textSecondary: string
      textTerciary: string
      bgDark: string
      bgLight: string
    }
    paddings: {
      containerSm: string
      containerMd: string
      containerLg: string
    }
  }
}
