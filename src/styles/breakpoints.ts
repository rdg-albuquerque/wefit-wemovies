import { css } from "styled-components"

const sizes = {
  sm: "360px",
  md: "900px",
  lg: "1200px",
}

const breakpoints = {
  sm: `(min-width: ${sizes.sm})`,
  md: `(min-width: ${sizes.md})`,
  lg: `(min-width: ${sizes.lg})`,
}

export default breakpoints
