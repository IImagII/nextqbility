import Link from 'next/link'
import styles from '../styles/Alink.module.css'

export default function Alink({ text, href }) {
   return (
      <Link href={href}>
         <span className={styles.link}>{text}</span>
      </Link>
   )
}
