import styles from './ResultItemCategories.module.css'

export function ResultItemCategories({ isAnnouncement, isDigest, isTechNews }) {
  return (
    <ul className={styles.cardCategories}>
      {[isAnnouncement, isDigest, isTechNews].map((attr, index) =>
        attr && attr === isAnnouncement
          ? <li key={index} className={styles.cardCategory}>Анонсы и события</li>
          : attr && attr === isDigest
            ? <li key={index} className={styles.cardCategory}>Новости</li>
            : attr && attr === isTechNews
              ? <li key={index} className={styles.cardCategory}>Технические новости</li>
              : ''
      )}
    </ul>
  )
}