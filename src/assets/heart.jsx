import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Heart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M32.506 2.12c-3.853-3.232-9.584-2.65-13.12.94L18 4.466l-1.385-1.404c-3.53-3.592-9.267-4.173-13.12-.941C-.92 5.829-1.152 12.485 2.8 16.505l13.605 13.826a2.229 2.229 0 0 0 3.186 0l13.605-13.826c3.958-4.02 3.726-10.676-.69-14.385Z"
    />
  </Svg>
)
export default Heart
