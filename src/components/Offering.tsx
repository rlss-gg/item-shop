import Image from "next/image"
import { CSS, Paint, Palette } from "types/CSS"
import { Item } from "types/Item"
import Chip from "./Chip"

type OfferingProps = {
  name: string
  decalFor?: string
  imgSrc: string
  type: Item.Type
  rarity: Item.Rarity
  paint?: Item.Paint
  price: number
  duration: number
  featured?: boolean
}

export default function Offering(props: OfferingProps) {
  return (
    <div
      style={{
        ...styles.item,
        borderColor: props.featured ? Palette.BlueLight : Palette.Grey,
        background: `linear-gradient(90deg, black 50%, ${
          props.featured ? Palette.BlueLight : Palette.Grey
        } 150%)`,
        boxShadow: `0 0 2rem 1rem ${
          props.featured ? Palette.BlueLight : Palette.Grey
        }44, 0 0 1rem 0.5rem ${
          props.featured ? Palette.BlueLight : Palette.Grey
        }aa inset`
      }}
    >
      <div style={styles.iconContainer}>
        <Image src={props.imgSrc} height={210} width={210} alt={props.name} />
      </div>
      <div style={styles.info}>
        <span style={styles.title}>{props.name}</span>
        {props.decalFor && (
          <span style={styles.decalFor}>{props.decalFor}</span>
        )}
        <span style={styles.properties}>
          {props.rarity} {props.type}
        </span>
        <span style={styles.price}>
          {props.price.toLocaleString("en-US")}
          <Image src="/sp.png" height={40} width={40} alt="SP" />
        </span>
      </div>
      <Chip
        value={`${props.duration} days`}
        textColor={Palette.WhiteDark}
        borderColor={Palette.GreyLight}
        backgroundColor={Palette.Grey}
        style={styles.duration}
      />
      {props.paint && (
        <Chip
          value={props.paint}
          textColor={
            props.paint === "Black" ? Palette.WhiteDark : Paint[props.paint]
          }
          borderColor={
            props.paint === "Black" ? Palette.WhiteDark : Paint[props.paint]
          }
          backgroundColor={Palette.Dark}
          style={styles.paint}
        />
      )}
    </div>
  )
}

const styles: CSS = {
  item: {
    color: Palette.White,
    flex: "1 0 28rem",
    border: "0.2rem solid",
    borderRadius: "2rem",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  iconContainer: {
    padding: "2rem",
    display: "grid",
    placeItems: "center"
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "1rem",
    overflow: "hidden"
  },
  title: {
    display: "block",
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: "2.3rem",
    textTransform: "uppercase"
  },
  decalFor: {
    fontSize: "1.8rem",
    position: "relative",
    bottom: "0.5rem",
    fontStyle: "italic"
  },
  properties: {
    display: "block",
    fontSize: "1.5rem"
  },
  price: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5em",
    fontSize: "2rem"
  },
  duration: {
    position: "absolute",
    top: "-0.5rem",
    right: "-0.5rem",
    borderRadius: "0.5rem"
  },
  paint: {
    position: "absolute",
    bottom: "-1.5rem",
    left: "50%",
    transform: "translateX(-50%)"
  }
}
