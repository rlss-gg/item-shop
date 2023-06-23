import { ExchangeProps } from "components/Exchange"
import { DisplayDate } from "components/Header"
import { Item } from "components/Offering"
import * as Items from "@rlss-gg/items"

/**
 * The date of the current item shop rotation.
 */
const date: DisplayDate = DisplayDate.fromUnixEpoch(Date.now())

/**
 * The offerings in the current item shop.1
 */
const exchanges: ExchangeProps[] = [
  {
    old: [Item(Items.banners.BrokenGlass, 400, 1)],
    new: [Item(Items.stickers.Devastated, 400, 1)]
  }
]

export { date, exchanges }
