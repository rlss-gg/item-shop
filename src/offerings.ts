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
const offerings: OfferingProps[] = []

export { date, offerings }
