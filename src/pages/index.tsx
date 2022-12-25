import Footer from "components/Footer"
import Header from "components/Header"
import Offering from "components/Offering"
import Page from "components/Page"
import Head from "next/head"
import { date, offerings } from "offerings"
import { CSS } from "types/CSS"

export default function Home() {
  return (
    <>
      <Head>
        <title>RL Sideswipe Item Shop Image Generator</title>
      </Head>
      <Page>
        <Header date={date} />
        <div style={styles.offerings}>
          {offerings.map((offering, i) => (
            <Offering key={i} {...offering} />
          ))}
        </div>
        <Footer />
      </Page>
    </>
  )
}

const styles: CSS = {
  offerings: {
    display: "flex",
    flexFlow: "row-reverse wrap-reverse",
    gap: "2rem",
    padding: "2rem"
  }
}
