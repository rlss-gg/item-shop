import { CSS, Palette } from "types/CSS"
import moment from "moment"

export type HeaderProps = {
  date: DisplayDate
}

export default function Header(props: HeaderProps) {
  return (
    <div style={styles.heading}>
      <h1 style={styles.title}>RL Sideswipe Item Shop Offerings</h1>
      <span style={styles.date}>{props.date.display}</span>
    </div>
  )
}

const styles: CSS = {
  heading: {
    color: Palette.White,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 2rem 1rem 2rem"
  },
  title: {
    fontSize: "4rem",
    textTransform: "uppercase",
    textShadow: `0 0 1rem ${Palette.Blue}`
  },
  date: {
    fontSize: "3rem",
    textTransform: "uppercase",
    color: Palette.WhiteDark,
    fontWeight: "bold",
    textShadow: `0 0 1rem ${Palette.Blue}`
  }
}

export class DisplayDate extends Date {
  public constructor(year: number, month: number, day: number) {
    super(year, month - 1, day)
  }

  public get display() {
    return moment(
      new Date(this.getFullYear(), this.getMonth(), this.getDate())
    ).format("Do MMMM YYYY")
  }

  public static fromUnixEpoch(timestamp: number) {
    const date = new Date(timestamp)
    return new DisplayDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    )
  }
}
