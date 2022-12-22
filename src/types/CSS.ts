import { CSSProperties } from "react"
import { Item } from "./Item"

export type CSS = Record<string, CSSProperties>

export enum Palette {
  Blue = "#3E77D1",
  BlueLight = "#4E87E1",
  Orange = "#C98744",
  Dark = "#080B1C",
  Grey = "#181B2C",
  GreyLight = "#282B3C",
  White = "#FFFFFF",
  WhiteDark = "#AAAAAA",
  Gold = "#C9B037",
  Silver = "#D7D7D7",
  Bronze = "#AD8A56",
  Red = "#E74C3C",
  Black = "#000000",
  Transparent = "transparent"
}

export const Paint: Record<Item.Paint, string> = {
  Black: "#111111",
  "Burnt Sienna": "#4C1100",
  Cobalt: "#3F51B5",
  Crimson: "#D50000",
  "Forest Green": "#4CAF50",
  Grey: "#777777",
  Lime: "#7FFF00",
  Orange: "#F4B400",
  Pink: "#FF4081",
  Purple: "#9C27B0",
  Saffron: "#FFEB3B",
  "Sky Blue": "#03A9F4",
  "Titanium White": "#FFFFFF"
}
