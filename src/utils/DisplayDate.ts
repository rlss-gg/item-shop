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

  public static fromUnixEpoch(timestamp: number) {
    const date = new Date(timestamp)
    return new DisplayDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    )
  }
}
