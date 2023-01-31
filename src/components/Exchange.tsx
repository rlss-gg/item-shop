import Image from "next/image"
import { CSS, Palette } from "types/CSS"
import Offering, { None, OfferingProps } from "./Offering"

export type ExchangeProps = {
  old: OfferingProps[]
  new: OfferingProps[]
}

export default function Exchange(props: ExchangeProps) {
  return (
    <div
      style={{
        ...styles.exchange,
        maxWidth: `${35 * Math.max(props.new.length, props.old.length)}rem`
      }}
    >
      <div style={styles.old}>
        {props.old.length !== 0 ? (
          props.old.map((offering, i) => (
            <div style={styles.oldOfferingBox} key={i}>
              <div style={styles.oldOffering}>
                <Offering {...offering} />
              </div>
              <div style={styles.oldWarning}>
                <Image
                  style={styles.timeoutIcon}
                  src="/expired.png"
                  height={150}
                  width={150}
                  alt="Timeout icon"
                />
                <span style={styles.expired}>EXPIRED</span>
              </div>
            </div>
          ))
        ) : (
          <None>Nothing Expired</None>
        )}
      </div>
      <div style={styles.new}>
        {props.new.length !== 0 ? (
          props.new.map((offering, i) => <Offering key={i} {...offering} />)
        ) : (
          <None>Nothing New</None>
        )}
      </div>
    </div>
  )
}

const styles: CSS = {
  exchange: {
    display: "inline-grid",
    gridTemplateRows: "1fr 1fr",
    maxWidth: "35em",
    gap: "2rem"
  },
  old: {
    transform: "scale(0.8)",
    display: "flex",
    gap: "2rem"
  },
  oldOfferingBox: {
    position: "relative",
    width: "100%"
  },
  oldOffering: {
    filter: "grayscale(50%) blur(1.5px)"
  },
  oldWarning: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "110%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: `radial-gradient(${Palette.Red}88, ${Palette.Transparent} 70%)`,
    borderRadius: "2rem"
  },
  expired: {
    fontSize: "5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    textShadow: `0 0 2rem ${Palette.Grey}`,
    color: Palette.Red,
    position: "absolute"
  },
  new: {
    display: "flex",
    gap: "2rem"
  }
}
