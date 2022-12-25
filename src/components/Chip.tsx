import { CSSProperties } from "react"
import { CSS } from "types/CSS"

export type ChipProps = {
  textColor: string
  backgroundColor: string
  borderColor: string
  value: string
  style?: CSSProperties
}

export default function Chip(props: ChipProps) {
  return (
    <span
      style={{
        ...styles.chip,
        color: props.textColor,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        boxShadow: `0 0 1rem 0.5rem ${props.borderColor}aa inset`,
        ...props.style
      }}
    >
      {props.value}
    </span>
  )
}

const styles: CSS = {
  chip: {
    border: "0.2rem solid",
    borderRadius: "100rem",
    padding: "0.3rem 1.3rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase"
  }
}
