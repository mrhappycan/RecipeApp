import * as React from "react"
import Svg, { Path } from "react-native-svg"
const GoBack = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF6B00"
      d="m12.576 19.895-1.084 1.084a1.167 1.167 0 0 1-1.656 0L.344 11.492a1.167 1.167 0 0 1 0-1.656L9.836.344a1.167 1.167 0 0 1 1.656 0l1.084 1.084c.464.464.454 1.22-.02 1.675L6.672 8.708h14.034c.649 0 1.171.523 1.171 1.172v1.563c0 .65-.522 1.172-1.171 1.172H6.672l5.884 5.605c.479.454.488 1.211.02 1.675Z"
    />
  </Svg>
)
export default GoBack
