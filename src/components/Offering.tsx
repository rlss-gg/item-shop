import Image from "next/image"
import { Item } from "types/Item"
import styles from "styles/components/Offering.module.scss"

export type OfferingProps = {
  name: string
  decalFor?: string
  thumbnail: string
  type: Item.Type
  rarity: Item.Rarity
  paint?: Item.Paint
  price: number
  duration: number
  new: boolean
}

export default function Offering(props: OfferingProps) {
  const cl = (value: string) => styles[value.toLowerCase().replaceAll(" ", "")]

  return (
    <div className="flex-[1_0_35rem] max-w-[37.83375rem] h-[21rem]">
      <div className={`relative rounded p-5 h-full ${cl(props.rarity)}`}>
        <div className="flex gap-5 h-full">
          <Image
            src={props.thumbnail}
            height={238}
            width={238}
            alt={props.name}
            className="mix-blend-lighten object-contain"
          />
          <div className="flex flex-col justify-between py-8">
            <div>
              <p className="text-5xl uppercase font-bold">
                {props.decalFor
                  ? `${props.decalFor}: ${props.name}`
                  : props.name}
              </p>
              <p className="text-xl uppercase text-[#aaaaaa]">
                {props.rarity} {props.type}
              </p>
              <p className="text-xl uppercase text-[#ffd32a]">
                {props.duration} DAY{props.duration !== 1 && "S"}
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <Image
                  src="https://cdn.rlss.gg/assets/items/sp.png"
                  height={60}
                  width={60}
                  alt="SP"
                />
                <p className="text-5xl">{props.price}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-2 left-0 w-full text-center">
          {props.paint && (
            <span
              className={`rounded py-2 px-5 text-3xl uppercase font-bold ${cl(
                props.paint
              )}`}
            >
              {props.paint}
            </span>
          )}
        </div>
        {props.new && (
          <div className="absolute -bottom-2 right-2">
            <span
              className={`rounded-full py-2 px-5 text-3xl uppercase font-bold text-black ${styles.new}`}
            >
              new
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
