import Header from "components/Header"
import Offering from "components/Offering"
import Page from "components/Page"
import { date, offerings } from "offerings"

export default function Offerings() {
  return (
    <Page>
      <div className="mx-24 my-20">
        <Header date={date} />

        <div className="flex flex-row flex-wrap gap-5">
          {offerings.map((offering, i) => (
            <Offering key={i} {...offering} />
          ))}
        </div>
      </div>
    </Page>
  )
}
