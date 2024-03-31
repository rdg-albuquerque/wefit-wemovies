import { ImageSpinner } from "./LoadingElements"

const Loading = (): JSX.Element => {
  return (
    <ImageSpinner
      alt="Loading State"
      src="/load-spinner.png"
      height={62.25}
      width={62.25}
    />
  )
}

export default Loading
