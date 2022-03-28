import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
import { Colors, ICON_SIZE, IconProps } from "./Constants";

export default ({ active }: IconProps) => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 18 20">
      <G
        transform="translate(1 1)"
        stroke={active ? Colors.default : Colors.selected}
        strokeWidth={2}
        fill={active ? Colors.default : "none"}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" />
        <Circle cx={8} cy={4} r={4} />
      </G>
    </Svg>
  )
}
