import Footer from "components/Footer"
import Header from "components/Header"
import Exchange from "components/Exchange"
import Page from "components/Page"
import Head from "next/head"
import { date, exchanges } from "exchanges"
import { CSS } from "types/CSS"

export default function Exchanges() {
  return (
    <>
      <Head>
        <title> RL Sideswipe Item Shop Image Generator</title>
      </Head>
      <Page>
        <Header date={date} page="Offering Changes" />
        <div style={styles.exchanges}>
          {exchanges.map((exchange, i) => (
            <Exchange key={i} {...exchange} />
          ))}
        </div>
        <Footer />
      </Page>
    </>
  )
}

const styles: CSS = {
  exchanges: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    padding: "2rem",
    justifyContent: "center"
  }
}
