import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class Banner extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Banner", name, rarity, thumbnail)
  }
}
