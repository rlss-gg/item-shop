import { Item } from "types/Item"

export default abstract class BaseItem {
  public readonly thumbnail: string

  public constructor(
    public readonly type: Item.Type,
    public readonly name: string,
    public readonly rarity: Item.Rarity,
    thumbnail: string
  ) {
    const iconPath = ((type: Item.Type): string => {
      switch (type) {
        case "Avatar":
          return "/avatars/"
        case "Banner":
          return "/banners/"
        case "Body":
          return "/bodies/"
        case "Rocket Boost":
          return "/boosters/"
        case "Decal":
          return "/decals/"
        case "Goal Explosion":
          return "/goal explosions/"
        case "Sticker":
          return "/stickers/"
        case "Topper":
          return "/toppers/"
        case "Wheels":
          return "/wheels/"
        default:
          return "/"
      }
    })(type)

    this.thumbnail = iconPath + thumbnail
  }
}
