import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class Decal extends BaseItem {
  public constructor(
    name: string,
    public readonly body: string,
    rarity: Item.Rarity,
    thumbnail: string
  ) {
    super("Decal", name, rarity, thumbnail)
  }
}
