import styles from './page.module.scss'

export const metadata = {
  title: 'Företag',
  // description: "",
}

export default function forening() {
  return (
    <main className={styles.foretag}>
      <div className={styles.wrapper}>
        <h2>Företag</h2>
        <div className={styles.content}></div>
      </div>
    </main>
  )
}
