import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class Body extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Body", name, rarity, thumbnail)
  }
}
