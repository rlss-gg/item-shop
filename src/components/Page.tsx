import { CSS, Palette } from "types/CSS"

export type PageProps = {
  children?: React.ReactNode
}

export default function Page(props: PageProps) {
  return (
    <main style={styles.main}>
      <div style={styles.setup}>
        Set your device viewport height and width to 2048x1024 to take the
        screenshot.
      </div>
      <div style={styles.display}>{props.children}</div>
    </main>
  )
}

const styles: CSS = {
  main: {
    width: "100vw",
    height: "100vh",
    background: Palette.Black,
    display: "grid",
    placeItems: "center"
  },
  setup: {
    position: "absolute",
    color: Palette.White,
    top: 0,
    margin: "1rem"
  },
  display: {
    width: "2048px",
    height: "1024px",
    background: `
      radial-gradient(transparent 50%, ${Palette.Blue}55),
      radial-gradient(${Palette.Dark}aa, ${Palette.Dark}ee),
      linear-gradient(${Palette.Dark}77, transparent 50%),
      url(/background.png)
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden"
  }
}
