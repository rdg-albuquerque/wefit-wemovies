import { ImageSpinner, LoadingContainer } from "./LoadingElements"

const Loading = (): JSX.Element => {
  return (
    <LoadingContainer className="loading-container">
      <ImageSpinner
        alt="Loading State"
        src="/load-spinner.png"
        height={62.25}
        width={62.25}
      />
    </LoadingContainer>
  )
}

export default Loading
