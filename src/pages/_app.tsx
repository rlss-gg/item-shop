import type { AppProps } from "next/app"
import "styles/tailwind.css"
import "styles/global.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
