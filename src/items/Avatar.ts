import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class Avatar extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Avatar", name, rarity, thumbnail)
  }
}
