import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class Wheel extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Wheels", name, rarity, thumbnail)
  }
}
