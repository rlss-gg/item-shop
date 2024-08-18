import DisplayDate from "utils/DisplayDate"
import { OfferingProps } from "components/Offering"
import * as Items from "@rlss-gg/items"
import { Item, NewItem } from "utils/Item"

/**
 * The date of the current item shop rotation.
 */
const date: DisplayDate = DisplayDate.fromUnixEpoch(Date.now())

/**
 * The offerings in the current item shop. Order from last to first as shown in
 * the in-game shop (this is due to flex-box behaviour).
 *
 * Example:
 *
 * ```js
 * const offerings: OfferingProps[] = [
 *   NewItem(Items.stickers.EggEyes, 400, 1),
 *   NewItem(Items.avatars.Narwhal, 800, 2),
 *   Item(Items.wheels.VedAvaI, 1200, 2, "Orange"),
 *   Item(Items.rocketBoosts.ToonSketch, 1800, 5, "Titanium White"),
 *   Item(Items.wheels.Reaper, 2400, 5, "Grey"),
 *   Item(Items.goalExplosions.Hellfire, 5000, 2, "Saffron")
 * ]
 * ```
 */
const offerings: OfferingProps[] = []

export { date, offerings }
