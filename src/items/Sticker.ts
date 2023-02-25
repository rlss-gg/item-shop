import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class Sticker extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Sticker", name, rarity, thumbnail)
  }
}
