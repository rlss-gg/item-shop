import { Decal, Item as ItemNS, ItemType } from "@rlss-gg/items"
import { OfferingProps } from "components/Offering"

export function Item(
  item: ItemType,
  price: number,
  duration: number,
  paint?: ItemNS.Paint
): OfferingProps {
  const isDecal = (item: ItemType): item is Decal => item.type === "Decal"
  const decalFor = isDecal(item) ? item.body : undefined

  return {
    name: item.name,
    decalFor,
    rarity: item.rarity,
    type: item.type,
    thumbnail: "https://rlss.blob.core.windows.net/assets/items" + item.thumbnail,
    price,
    duration,
    paint,
    new: false
  }
}

export function NewItem(
  item: ItemType,
  price: number,
  duration: number,
  paint?: ItemNS.Paint
) {
  return { ...Item(item, price, duration, paint), new: true }
}
