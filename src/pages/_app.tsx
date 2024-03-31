import "@/styles/globals.css"
import theme from "@/styles/theme/theme"
import type { AppProps } from "next/app"
import { StyleSheetManager, ThemeProvider } from "styled-components"
import { AppContainer } from "@/components/app-container/AppContainerElements"
import { Open_Sans } from "next/font/google"
import Header from "@/components/header/Header"
import { GlobalContextProvider } from "@/contexts/global-context"

const openSans = Open_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <AppContainer className={openSans.className}>
            <Header />
            <Component {...pageProps} />
          </AppContainer>
        </GlobalContextProvider>
      </ThemeProvider>
    </StyleSheetManager>
  )
}
