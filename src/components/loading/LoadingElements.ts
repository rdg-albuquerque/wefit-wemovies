import breakpoints from "@/styles/breakpoints"
import Image from "next/image"
import styled from "styled-components"

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${breakpoints.md} {
    padding-top: 5rem;
  }
`

export const ImageSpinner = styled(Image)`
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
