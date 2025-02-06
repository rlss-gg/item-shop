import Display from "./Display"

export type PageProps = {
  children?: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <main className="w-[100vw] h-[100vh] bg-black grid place-items-center">
      <div className="text-white top-0 m-4 absolute">
        Set your device viewport height and width to 2048x1024 to take the
        screenshot. When there are (rarely) 7 items in shop, set to 2048x1410
        instead.
      </div>
      <Display>{children}</Display>
    </main>
  )
}
