import moment from "moment"

export default class DisplayDate extends Date {
  /**
   * The timezone in which the item shop resets.
   */
  public static resetTimezone = 7

  public constructor(year: number, month: number, day: number) {
    super(year, month - 1, day)
  }

  /**
   * Format the date to display on the shop rotation.
   */
  public get display() {
    return moment(
      new Date(this.getFullYear(), this.getMonth(), this.getDate())
    ).format("MMMM D, YYYY")
  }

  /**
   * Calculate the display date for the current shop rotation based on the time
   * and shop reset timezone.
   *
   * @param timestamp The timestamp of the current time of the shop
   * @param offset Whether or not to offset based on the reset and local timezone
   * @returns A `DisplayDate` object representing the calculated time
   */
  public static fromUnixEpoch(timestamp: number, offset: boolean = true) {
    const currentOffset = new Date().getTimezoneOffset() * 60 * 1000
    const appliedOffset = DisplayDate.resetTimezone * 60 * 60 * 1000
    const effectiveOffset = offset ? appliedOffset + currentOffset : 0

    const date = new Date(timestamp + effectiveOffset)

    return new DisplayDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    )
  }
}
