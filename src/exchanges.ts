import { ExchangeProps } from "components/Exchange"
import { DisplayDate } from "components/Header"

/**
 * The date of the current item shop rotation.
 */
const date: DisplayDate = DisplayDate.fromUnixEpoch(Date.now())

/**
 * The offerings in the current item shop.
 */
const exchanges: ExchangeProps[] = []

export { date, exchanges }
