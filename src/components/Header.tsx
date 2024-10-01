import Image from "next/image"
import DisplayDate from "utils/DisplayDate"

export type HeaderProps = {
  date: DisplayDate
}

export default function Header(props: HeaderProps) {
  return (
    <div className="-mt-5 mb-5 flex justify-between items-center">
      <div>
        <h1 className="text-white font-bold text-7xl tracking-wide uppercase">
          Item Shop Offerings
        </h1>
        <h2 className="text-[#ffd32a] font-bold text-7xl tracking-wide uppercase">
          {props.date.display}
        </h2>
      </div>
      <div>
        <Image
          src="https://cdn.rlss.gg/assets/fulllogo.png"
          height={120}
          width={750}
          alt="RLSS.GG Logo"
          className="object-contain"
        />
      </div>
    </div>
  )
}
