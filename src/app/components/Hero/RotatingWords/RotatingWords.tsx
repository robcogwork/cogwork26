import styles from './RotatingWords.module.css'

export default function RotatingWords() {
  return (
    <section className="w-full">
      <div className={styles.wrapper}>
        <h1 className="text-aubergine-500">För</h1>
        <div className={styles.words}>
          <div className="text-salmon-500">
            <h1>Bokningssystem</h1>
            <h1>Föreningar</h1>
            <h1>Förbund</h1>
            <h1>Företag</h1>
            <h1>Medlemsregister</h1>
            <h1>Minaaktviteter.se</h1>
            <h1>Dans.se</h1>
            <h1>Idrott.se</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
