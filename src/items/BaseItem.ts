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

export class Avatar extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Avatar", name, rarity, thumbnail)
  }
}

export class Banner extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Banner", name, rarity, thumbnail)
  }
}

export class Body extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Body", name, rarity, thumbnail)
  }
}

export class Decal extends BaseItem {
  public constructor(
    name: string,
    public readonly body: string,
    rarity: Item.Rarity,
    thumbnail: string
  ) {
    super("Decal", name, rarity, thumbnail)
  }
}

export class GoalExplosion extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Goal Explosion", name, rarity, thumbnail)
  }
}

export class RocketBoost extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Rocket Boost", name, rarity, thumbnail)
  }
}

export class Sticker extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Sticker", name, rarity, thumbnail)
  }
}

export class Topper extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Topper", name, rarity, thumbnail)
  }
}

export class Wheel extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Wheels", name, rarity, thumbnail)
  }
}
