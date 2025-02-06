import DisplayDate from "utils/DisplayDate"
import { OfferingProps } from "components/Offering"
import * as Items from "@rlss-gg/items"
import { Item, NewItem } from "utils/Item"

/**
 * The date of the current item shop rotation.
 */
const date: DisplayDate = DisplayDate.fromUnixEpoch(Date.now())

/**
 * The offerings in the current item shop. Order from first to last as shown in
 * the in-game shop.
 *
 * Example:
 *
 * ```js
 * const offerings: OfferingProps[] = [
 *   NewItem(Items.decals.Universal.TwentyXX, 5000, 4),
 *   NewItem(Items.bodies.Marauder, 2400, 7, "Grey"),
 *   NewItem(Items.rocketBoosts.MagicMissile, 1800, 7, "Saffron"),
 *   NewItem(Items.avatars.DonutEater, 1200, 4),
 *   NewItem(Items.toppers.RoosterComb, 800, 2),
 *   NewItem(Items.avatars.MrsAvocado, 400, 1)
 * ]
 * ```
 */
const offerings: OfferingProps[] = []

export { date, offerings }
