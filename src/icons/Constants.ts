import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");

export interface IconProps {
  active?: boolean;
}

const numberOfIcons = 5;
const horizontalPadding = 48;
export const DURATION = 450;
export const PADDING = 16;
export const SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons);
export const ICON_SIZE = SEGMENT - horizontalPadding;

export const Colors = {
  selected: "#67676E",
  default: "#007147",
  border: "#A5D0C6",
  background: "#FEFFFE",
  white: "#FFFFFF"
};