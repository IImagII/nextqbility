import { useRouter } from 'next/router'
import styles from '../../styles/User.module.scss'
import MainConteiner from '../../components/MainContainer'

export default function User({ user }) {
   const { query } = useRouter()

   return (
      <MainConteiner>
         <div className={styles.user}>
            <h1>Пользователь с id - {query.id}</h1>
            <div>Имя пользователя - {user.name}</div>
            <div>Телефон пользователя - {user.phone}</div>
         </div>
      </MainConteiner>
   )
}
export async function getServerSideProps({ params }) {
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
   )
   const user = await response.json()

   return {
      props: { user },
   }
}
