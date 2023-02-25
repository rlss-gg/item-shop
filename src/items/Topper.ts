import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class Topper extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Topper", name, rarity, thumbnail)
  }
}
