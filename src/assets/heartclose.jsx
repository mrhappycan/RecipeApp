import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HeartClose = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF6B00"
      d="m12.204 2.226-.847.861L11 3.45l-.356-.363-.847-.86v-.001C7.802.19 4.59-.112 2.457 1.682c-2.472 2.083-2.603 5.825-.39 8.084l8.315 8.473a.86.86 0 0 0 1.232 0l8.315-8.473c2.218-2.259 2.087-6-.386-8.084l-7.34.544Zm0 0c2-2.036 5.206-2.337 7.338-.544l-7.339.544Z"
    />
  </Svg>
)
export default HeartClose
