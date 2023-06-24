import { Decal, ItemType } from "@rlss-gg/items"
import { OfferingProps } from "components/Offering"
import { Item } from "types/Item"

export function Item(
  item: ItemType,
  price: number,
  duration: number,
  paint?: Item.Paint
): OfferingProps {
  const isDecal = (item: ItemType): item is Decal => item.type === "Decal"
  const decalFor = isDecal(item) ? item.body : undefined

  return {
    name: item.name,
    decalFor,
    rarity: item.rarity,
    type: item.type,
    thumbnail: item.thumbnail,
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
  paint?: Item.Paint
) {
  return { ...Item(item, price, duration, paint), new: true }
}
