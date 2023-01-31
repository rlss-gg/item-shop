import Image from "next/image"
import { CSS, Paint, Palette } from "types/CSS"
import { Item } from "types/Item"
import Chip from "./Chip"

export type OfferingProps = {
  name: string
  decalFor?: string
  thumbnail: string
  type: Item.Type
  rarity: Item.Rarity
  paint?: Item.Paint
  price: number
  duration: number
  featured?: boolean
  fontMultiplier?: number
}

export default function Offering(props: OfferingProps) {
  const iconPath = ((type: Item.Type): string => {
    switch (type) {
      case "Avatar":
        return "/avatars/"
      case "Banner":
        return "/banners/"
      case "Body":
        return "/bodies/"
      case "Rocket Boost":
        return "/boosters/"
      case "Decal":
        return "/decals/"
      case "Goal Explosion":
        return "/goal explosions/"
      case "Sticker":
        return "/stickers/"
      case "Topper":
        return "/toppers/"
      case "Wheels":
        return "/wheels/"
      default:
        return "/"
    }
  })(props.type)

  const accentColor = props.featured ? Palette.BlueLight : Palette.GreyLight
  const paintColor =
    props.paint === "Black"
      ? Palette.WhiteDark
      : props.paint === "Burnt Sienna"
      ? Palette.Brown
      : Paint[props.paint ?? "Black"]

  return (
    <div
      style={{
        ...styles.item,
        borderColor: accentColor,
        background: `linear-gradient(90deg, black 50%, ${accentColor} 150%)`,
        boxShadow: `
          0 0 2rem 1rem ${accentColor}44,
          0 0 1rem 0.5rem ${accentColor}aa inset
        `
      }}
    >
      {/* Image */}
      <div style={styles.iconContainer}>
        <Image
          src={iconPath + props.thumbnail}
          height={210}
          width={210}
          alt={props.name}
          style={styles.icon}
        />
        <div
          style={{
            ...styles.iconCover,
            background: `
              linear-gradient(to right, ${accentColor}99, transparent 50%)
            `
          }}
        />
      </div>
      {/* Details */}
      <div style={styles.info}>
        {/* Name (and body for a decal) */}
        <span
          style={{
            ...styles.title,
            fontSize: 2 * (props.fontMultiplier ?? 1) + "rem"
          }}
        >
          {props.name}
        </span>
        {props.decalFor && (
          <span style={styles.decalFor}>{props.decalFor}</span>
        )}
        {/* Rarity and type */}
        <span style={styles.properties}>
          {props.rarity} {props.type}
        </span>
        {/* Duration in store */}
        <span style={styles.duration}>
          {props.duration} DAY{props.duration !== 1 && "S"}
        </span>
        {/* Price */}
        <span style={styles.price}>
          {props.price.toLocaleString("en-US")}
          <Image src="/sp.png" height={40} width={40} alt="SP" />
        </span>
      </div>
      {/* Paint */}
      {props.paint && (
        <>
          <Chip
            value={props.paint}
            textColor={paintColor}
            borderColor={paintColor}
            backgroundColor={Palette.Dark}
            style={styles.paint}
          />
          <div
            style={{
              ...styles.paintAccent,
              boxShadow: `
                0 0 2rem 1rem ${paintColor}44,
                0 0 1rem 0.5rem ${paintColor}44 inset
              `
            }}
          />
        </>
      )}
    </div>
  )
}

type NoneProps = {
  children?: React.ReactNode
}

export function None(props: NoneProps) {
  return <div style={{ ...styles.item, ...styles.none }}>{props.children}</div>
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
    placeItems: "center",
    position: "relative"
  },
  iconCover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "2rem"
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
    fontSize: "1.5rem",
    color: Palette.WhiteDark
  },
  duration: {
    color: Palette.Gold,
    fontSize: "1.2rem"
  },
  price: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5em",
    fontSize: "2rem"
  },
  paint: {
    position: "absolute",
    bottom: "-1.5rem",
    left: "50%",
    width: "15rem",
    textAlign: "center",
    transform: "translateX(-50%)"
  },
  paintAccent: {
    position: "absolute",
    top: "0.2rem",
    left: "0.2rem",
    borderRadius: "2rem",
    width: "calc(100% - 0.4rem)",
    height: "calc(100% - 0.4rem)"
  },
  none: {
    border: `0.4rem dashed ${Palette.WhiteDark}55`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    color: Palette.WhiteDark
  }
}
