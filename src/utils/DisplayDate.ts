import moment from "moment"

export default class DisplayDate extends Date {
  public constructor(year: number, month: number, day: number) {
    super(year, month - 1, day)
  }

  public get display() {
    return moment(
      new Date(this.getFullYear(), this.getMonth(), this.getDate())
    ).format("MMMM D, YYYY")
  }

  public static fromUnixEpoch(timestamp: number, aest: boolean = true) {
    const currentOffset = new Date().getTimezoneOffset()
    const offset = ((aest ? 600 : 0) + currentOffset) * 60 * 1000
    const date = new Date(timestamp + offset)

    return new DisplayDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    )
  }
}
