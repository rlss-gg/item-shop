import Items from "items/Items"
import Head from "next/head"
import Image from "next/image"
import { CSS } from "types/CSS"

export default function Exchanges() {
  return (
    <>
      <Head>
        <title> RL Sideswipe Item Database</title>
      </Head>
      <div style={styles.items}>
        {Object.values(Items.avatars).map(avatar => (
          <div key={avatar.name}>
            <span>{avatar.name}</span>
            <br />
            <span>{avatar.rarity}</span>
            <br />
            <span>{avatar.type}</span>
            <br />
            <Image
              src={avatar.thumbnail}
              alt={avatar.name}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </>
  )
}

const styles: CSS = {
  items: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "1rem 0"
  }
}
