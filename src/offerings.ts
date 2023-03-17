import { DisplayDate } from "components/Header"
import { Item, OfferingProps } from "components/Offering"

/**
 * The date of the current item shop rotation.
 */
const date: DisplayDate = DisplayDate.fromUnixEpoch(Date.now())

/**
 * The offerings in the current item shop.
 */
const offerings: OfferingProps[] = []

export { date, offerings }
