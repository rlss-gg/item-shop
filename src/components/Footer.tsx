import Image from "next/image"
import { CSS, Palette } from "types/CSS"

export default function Footer() {
  return (
    <div style={styles.footer}>
      <span>Powered By </span>
      <Image src="/logo.png" height={200} width={200} alt="RLSS.GG Logo" />
      <div style={styles.daily}>
        <span style={styles.dailyText}>
          Don&apos;t forget
          <br />
          your daily
        </span>
        <Image
          src="/presents/t_ui_BronzerPresentThumb.png"
          height={100}
          width={100}
          alt="Daily Crate"
        />
      </div>
    </div>
  )
}

const styles: CSS = {
  footer: {
    color: Palette.White,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    position: "relative"
  },
  daily: {
    position: "absolute",
    right: 0,
    padding: "0 3rem 0 6rem",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: `
      radial-gradient(
        ellipse at 50% bottom,
        ${Palette.BlueLight}77,
        transparent 70%
      )
    `,
    backgroundSize: "200% 100%"
  },
  dailyText: {
    fontSize: "1.5rem",
    lineHeight: "1.6rem",
    display: "inline-block",
    color: Palette.WhiteDark
  }
}
