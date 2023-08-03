import styles from './ResultItem.module.css'
import { parseDate, parseXml } from '../../../func/map'
import { ResultItemCategories } from './ResultItemCategory'

function ResultItem({ data }) {
  return (
    <li className={styles.resultItem}>
      <div className={styles.cardHeader}>
        <div className={styles.sourceBlock}>
          <span className={styles.date}>{parseDate(data.issueDate)}</span>
          <span className={styles.source}>{data.source.name}</span>
        </div>
        <h1 className={styles.cardTitle}>{data.title.text}</h1>
        <ResultItemCategories
          isAnnouncement={data.attributes.isAnnouncement}
          isDigest={data.attributes.isDigest}
          isTechNews={data.attributes.isTechNews}
        />
      </div>
      <div className={styles.cardText}>
        {parseXml(data.content.markup)}
      </div>
      <div className={styles.cardFooter}>
        <a
          className={styles.readMore}
          href={data.url === '' ? '/notFound' : data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Читать в источнике
        </a>
        <div className={styles.wordCount}>{data.attributes.wordCount} слова</div>
      </div>
    </li>
  )
}

export { ResultItem }
