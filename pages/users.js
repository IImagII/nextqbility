import Link from 'next/link'
import MainConteiner from '../components/MainContainer'

const Users = ({ users }) => {
   return (
      <div>
         <MainConteiner keywords={'user page'}>
            <h1>Пользователей страница</h1>
            <ul>
               {users.map(user => (
                  <li key={user.id}>
                     <Link href={`/users/${user.id}`}>
                        {user.id}. {user.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </MainConteiner>
      </div>
   )
}
export default Users

export async function getStaticProps(context) {
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const users = await response.json()
   return {
      props: { users },
   }
}
