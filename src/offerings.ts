import DisplayDate from "utils/DisplayDate"
import { OfferingProps } from "components/Offering"
import * as Items from "@rlss-gg/items"
import { Item, NewItem } from "utils/Item"

/**
 * The date of the current item shop rotation.
 */
const date: DisplayDate = DisplayDate.fromUnixEpoch(Date.now())

/**
 * The offerings in the current item shop.
 */
const offerings: OfferingProps[] = [
  NewItem(Items.banners.SolarSystem, 400, 1),
  Item(Items.decals.Mantis.Critters, 800, 1, "Purple"),
  Item(Items.wheels.Barouche, 1200, 1, "Crimson"),
  Item(Items.rocketBoosts.MagicMissile, 1800, 5, "Orange"),
  Item(Items.wheels.Ultralex, 2400, 5, "Lime"),
  Item(Items.bodies.BreakoutS, 5000, 5, "Saffron")
]

export { date, offerings }
