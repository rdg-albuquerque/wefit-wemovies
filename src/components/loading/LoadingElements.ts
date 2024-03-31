import Image from "next/image"
import styled from "styled-components"

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
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
