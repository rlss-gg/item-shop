import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class RocketBoost extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Rocket Boost", name, rarity, thumbnail)
  }
}
