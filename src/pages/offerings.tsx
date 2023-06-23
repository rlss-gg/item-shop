import Offering from "components/Offering"
import Page from "components/Page"
import Image from "next/image"
import { date, offerings } from "offerings"

export default function Offerings() {
  return (
    <Page>
      <div className="mx-24 my-20">
        <div className="mb-5 flex justify-between items-center">
          <div>
            <h1 className="text-white font-bold text-7xl tracking-wide uppercase">
              Item Shop Offerings
            </h1>
            <h2 className="text-[#ffd32a] font-bold text-7xl tracking-wide uppercase">
              {date.display}
            </h2>
          </div>
          <div>
            <Image
              src="https://cdn.rlss.gg/assets/fulllogo.png"
              height={100}
              width={625}
              alt="RLSS.GG Logo"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-row-reverse flex-wrap-reverse gap-5">
          {offerings.map((offering, i) => (
            <Offering key={i} {...offering} />
          ))}
        </div>
      </div>
    </Page>
  )
}
