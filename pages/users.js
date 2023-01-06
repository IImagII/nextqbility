import Link from 'next/link'
import { useState } from 'react'

const Users = () => {
   const [users, setUsers] = useState([
      {
         id: 1,
         name: 'Petya',
      },
      {
         id: 2,
         name: 'Lena',
      },
   ])

   return (
      <div>
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
      </div>
   )
}
export default Users
