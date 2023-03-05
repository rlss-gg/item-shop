import Items from "items/Items"
import Head from "next/head"
import Image from "next/image"
import { CSS, Palette } from "types/CSS"

export default function Exchanges() {
  return (
    <>
      <Head>
        <title> RL Sideswipe Item Database</title>
      </Head>

      <div style={styles.page}>
        <h1>Avatars</h1>
        <div style={styles.items}>
          {Object.values(Items.avatars).map(avatar => (
            <div key={avatar.name} style={styles.item}>
              <span>{avatar.name}</span>
              <br />
              <span style={styles.rarity}>{avatar.rarity}</span>
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
            <div key={banner.name} style={styles.item}>
              <span>{banner.name}</span>
              <br />
              <span style={styles.rarity}>{banner.rarity}</span>
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
            <div key={body.name} style={styles.item}>
              <span>{body.name}</span>
              <br />
              <span style={styles.rarity}>{body.rarity}</span>
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

        <br />
        <h1>Decals</h1>
        <div style={styles.items}>
          {Object.values(Items.decals)
            .map(body => Object.values(body))
            .flat()
            .map(decal => (
              <div key={decal.name} style={styles.item}>
                <span>{decal.body}</span>: <span>{decal.name}</span>
                <br />
                <span style={styles.rarity}>{decal.rarity}</span>
                <br />
                <div style={styles.imageContainer}>
                  <Image
                    src={decal.thumbnail}
                    alt={decal.name}
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
        <h1>Goal Explosions</h1>
        <div style={styles.items}>
          {Object.values(Items.goalExplosions).map(goalExplosion => (
            <div key={goalExplosion.name} style={styles.item}>
              <span>{goalExplosion.name}</span>
              <br />
              <span style={styles.rarity}>{goalExplosion.rarity}</span>
              <br />
              <div style={styles.imageContainer}>
                <Image
                  src={goalExplosion.thumbnail}
                  alt={goalExplosion.name}
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
        <h1>Rocket Boosts</h1>
        <div style={styles.items}>
          {Object.values(Items.rocketBoosts).map(rocketBoost => (
            <div key={rocketBoost.name} style={styles.item}>
              <span>{rocketBoost.name}</span>
              <br />
              <span style={styles.rarity}>{rocketBoost.rarity}</span>
              <br />
              <div style={styles.imageContainer}>
                <Image
                  src={rocketBoost.thumbnail}
                  alt={rocketBoost.name}
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
        <h1>Stickers</h1>
        <div style={styles.items}>
          {Object.values(Items.stickers).map(sticker => (
            <div key={sticker.name} style={styles.item}>
              <span>{sticker.name}</span>
              <br />
              <span style={styles.rarity}>{sticker.rarity}</span>
              <br />
              <div style={styles.imageContainer}>
                <Image
                  src={sticker.thumbnail}
                  alt={sticker.name}
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
        <h1>Toppers</h1>
        <div style={styles.items}>
          {Object.values(Items.toppers).map(topper => (
            <div key={topper.name} style={styles.item}>
              <span>{topper.name}</span>
              <br />
              <span style={styles.rarity}>{topper.rarity}</span>
              <br />
              <div style={styles.imageContainer}>
                <Image
                  src={topper.thumbnail}
                  alt={topper.name}
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
        <h1>Wheels</h1>
        <div style={styles.items}>
          {Object.values(Items.wheels).map(wheel => (
            <div key={wheel.name} style={styles.item}>
              <span>{wheel.name}</span>
              <br />
              <span style={styles.rarity}>{wheel.rarity}</span>
              <br />
              <div style={styles.imageContainer}>
                <Image
                  src={wheel.thumbnail}
                  alt={wheel.name}
                  style={styles.image}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const styles: CSS = {
  page: {
    backgroundColor: Palette.Grey,
    color: Palette.White,
    padding: "1rem"
  },
  items: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "1rem"
  },
  item: {
    backgroundColor: Palette.Black,
    borderRadius: "1rem",
    padding: "0.5rem"
  },
  rarity: {
    color: Palette.WhiteDark
  },
  imageContainer: {
    position: "relative",
    height: "120px",
    marginBottom: "0.6rem"
  },
  image: {
    width: "100%",
    height: "auto"
  }
}
