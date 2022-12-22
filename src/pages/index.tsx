import Offering from "components/Offering"
import Page from "components/Page"
import Head from "next/head"
import Image from "next/image"
import { CSS, Palette } from "types/CSS"

export default function Home() {
  return (
    <>
      <Head>
        <title>RL Sideswipe Item Shop Image Generator</title>
      </Head>
      <Page>
        <div style={styles.heading}>
          <h1 style={styles.title}>RL Sideswipe Item Shop Offerings</h1>
          <span style={styles.date}>22nd December 2022</span>
        </div>
        <div style={styles.offerings}>
          <Offering
            name="Gale Fire"
            decalFor="Maverick"
            imgSrc="/decals/t_Decal_maverick_GaleFire.png"
            type="Decal"
            rarity="Uncommon"
            price={400}
            duration={7}
          />
          <Offering
            name="Helicoprion"
            imgSrc="/wheels/35c7b311ff1575503194.png"
            type="Wheels"
            rarity="Rare"
            paint="Cobalt"
            price={800}
            duration={7}
          />
          <Offering
            name="Salty Peanut"
            imgSrc="/toppers/d1c6c246661617813748.png"
            type="Topper"
            rarity="Very Rare"
            price={1200}
            duration={7}
          />
          <Offering
            name="Haunted Hoss"
            imgSrc="/wheels/702cb882581628669779.png"
            type="Wheels"
            rarity="Import"
            paint="Orange"
            price={1800}
            duration={7}
          />
          <Offering
            name="Maverick"
            imgSrc="/bodies/Maverick_body_icon.png"
            type="Body"
            rarity="Exotic"
            paint="Sky Blue"
            price={2400}
            duration={7}
          />
          <Offering
            name="Dueling Dragons"
            imgSrc="/goal explosions/Thumbnail_Exp_Dragons.png"
            type="Goal Explosion"
            rarity="Black Market"
            paint="Black"
            price={3200}
            duration={7}
            featured
          />
        </div>
        <div style={styles.footer}>
          <span>Powered By </span>
          <Image src="/logo.png" height={200} width={200} alt="RLSS.GG Logo" />
          <div style={styles.daily}>
            <span style={styles.dailyText}>
              Don&apos;t forget
              <br />
              your daily
            </span>
            <Image
              src="/presents/t_ui_BronzerPresentThumb.png"
              height={100}
              width={100}
              alt="Daily Crate"
            />
          </div>
        </div>
      </Page>
    </>
  )
}

const styles: CSS = {
  heading: {
    color: Palette.White,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 2rem 1rem 2rem"
  },
  title: {
    fontSize: "4rem",
    textTransform: "uppercase"
  },
  date: {
    fontSize: "3rem",
    textTransform: "uppercase",
    color: Palette.BlueLight,
    fontWeight: "bold"
  },
  offerings: {
    display: "flex",
    flexFlow: "row-reverse wrap-reverse",
    gap: "2rem",
    padding: "2rem"
  },
  footer: {
    color: Palette.White,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    position: "relative"
  },
  daily: {
    position: "absolute",
    right: "3rem",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  dailyText: {
    fontSize: "1.5rem",
    lineHeight: "1.6rem",
    display: "inline-block",
    color: Palette.WhiteDark
  }
}
