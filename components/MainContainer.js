import Head from 'next/head'
import styles from '../styles/index.module.css'
import Alink from './Alink'

const MainConteiner = ({ children, keywords }) => {
   return (
      <>
         <Head>
            <meta keywords={'mag,nextJS' + keywords}></meta>
            <title>Главная страница</title>
         </Head>
         <div className={styles.navbar}>
            <Alink href={'/'} text='Главная' />
            <Alink href={'/users'} text='Пользователи' />
         </div>
         <div>{children}</div>
      </>
   )
}

export default MainConteiner
