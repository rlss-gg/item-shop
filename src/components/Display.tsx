import styles from "styles/components/Display.module.scss"

type DisplayProps = {
  children?: React.ReactNode
}

export default function Display({ children }: DisplayProps) {
  return <div className={styles.display}>{children}</div>
}
