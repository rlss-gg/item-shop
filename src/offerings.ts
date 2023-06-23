import { DisplayDate } from "components/Header"
import { Item, OfferingProps } from "components/Offering"
import { DuelingDragons } from "items/GoalExplosion"
import { FractalFire, Tachyon, Taco } from "items/RocketBoost"
import { PizzaPixel, Snail } from "items/Topper"

/**
 * The date of the current item shop rotation.
 */
const date: DisplayDate = DisplayDate.fromUnixEpoch(Date.now())

/**
 * The offerings in the current item shop.
 */
const offerings: OfferingProps[] = [
  Item(Snail, 400, 1, "Crimson"),
  Item(PizzaPixel, 800, 2),
  Item(Taco, 1200, 4),
  Item(Tachyon, 1800, 7, "Crimson"),
  Item(FractalFire, 2400, 7, "Forest Green"),
  Item(DuelingDragons, 5000, 4, "Black", true)
]

export { date, offerings }
