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

      <h1>Avatars</h1>
      <div style={styles.items}>
        {Object.values(Items.avatars).map(avatar => (
          <div key={avatar.name}>
            <span>{avatar.name}</span>
            <br />
            <span>{avatar.rarity}</span>
            <br />
            <span>{avatar.type}</span>
            <br />
            <div style={styles.imageContainer}>
              <Image
                src={avatar.thumbnail}
                alt={avatar.name}
                style={styles.image}
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      <br />
      <h2>Banners</h2>
      <div style={styles.items}>
        {Object.values(Items.banners).map(banner => (
          <div key={banner.name}>
            <span>{banner.name}</span>
            <br />
            <span>{banner.rarity}</span>
            <br />
            <span>{banner.type}</span>
            <br />
            <Image
              src={banner.thumbnail}
              alt={banner.name}
              style={styles.image}
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              src={banner.full}
              alt={banner.name}
              style={styles.image}
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <br />
      <h1>Bodies</h1>
      <div style={styles.items}>
        {Object.values(Items.bodies).map(body => (
          <div key={body.name}>
            <span>{body.name}</span>
            <br />
            <span>{body.rarity}</span>
            <br />
            <span>{body.type}</span>
            <br />
            <div style={styles.imageContainer}>
              <Image
                src={body.thumbnail}
                alt={body.name}
                style={styles.image}
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
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
  },
  imageContainer: {
    position: "relative",
    height: "150px"
  },
  image: {
    width: "100%",
    height: "auto"
  }
}
