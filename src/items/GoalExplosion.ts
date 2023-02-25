import { Item } from "types/Item"
import BaseItem from "./BaseItem"

export default class GoalExplosion extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Goal Explosion", name, rarity, thumbnail)
  }
}
