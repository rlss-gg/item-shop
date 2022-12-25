import { DisplayDate } from "components/Header"
import { OfferingProps } from "components/Offering"

/**
 * The date of the current item shop rotation.
 */
const date: DisplayDate = new DisplayDate(2022, 12, 22)

/**
 * The offerings in the current item shop.
 */
const offerings: OfferingProps[] = [
  {
    name: "Gale Fire",
    decalFor: "Maverick",
    thumbnail: "t_Decal_maverick_GaleFire.png",
    type: "Decal",
    rarity: "Uncommon",
    price: 400,
    duration: 7
  },
  {
    name: "Helicoprion",
    thumbnail: "35c7b311ff1575503194.png",
    type: "Wheels",
    rarity: "Rare",
    paint: "Cobalt",
    price: 800,
    duration: 7
  },
  {
    name: "Salty Peanut",
    thumbnail: "d1c6c246661617813748.png",
    type: "Topper",
    rarity: "Very Rare",
    price: 1200,
    duration: 7
  },
  {
    name: "Haunted Hoss",
    thumbnail: "702cb882581628669779.png",
    type: "Wheels",
    rarity: "Import",
    paint: "Orange",
    price: 1800,
    duration: 7
  },
  {
    name: "Maverick",
    thumbnail: "Maverick_body_icon.png",
    type: "Body",
    rarity: "Exotic",
    paint: "Sky Blue",
    price: 2400,
    duration: 7
  },
  {
    name: "Dueling Dragons",
    thumbnail: "Thumbnail_Exp_Dragons.png",
    type: "Goal Explosion",
    rarity: "Black Market",
    paint: "Black",
    price: 3200,
    duration: 7,
    featured: true
  }
]

export { date, offerings }
