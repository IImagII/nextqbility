import Link from 'next/link'

const Index = () => {
   // обязательно именно с таким export default
   return (
      <div>
         <div className='navbar'>
            <Link href='/' className='link'>
               <span className='link'> Главная</span>
            </Link>
            <Link href='/users'>
               <span className='link'>Пользователи</span>
            </Link>
         </div>
         <h1>Главная страница</h1>
         <style jsx>
            {`
               .navbar {
                  background: orange;
                  padding: 15px;
               }
               .link {
                  text-decoration: none;
                  color: white;
                  font-size: 20px;
                  margin: 10px;
               }
            `}
         </style>
      </div>
   )
}
export default Index
