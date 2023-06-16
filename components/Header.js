 

import {FaPaperPlane} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {BsTelephoneFill} from 'react-icons/bs'
import {BsHouses} from 'react-icons/bs'
import Link from 'next/link'
import Navigation from './Navigation'
import { getCookie, setCookie } from 'cookies-next';
import { cookies } from 'next/dist/client/components/headers'
import Image from 'next/image'
/* export const getServerSideProps = async ({ req, res }) => {
    setCookie("jwt", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NThhNWMyZjZiNWUwMDA0YWQ0ZGQ2MSIsImlhdCI6MTY4NjYzOTUwNCwiZXhwIjoxNjg5MjMxNTA0fQ.UTvd7TuMKHSXJ3YH057ICBF2RXEZprim94M_qyUVkj0")
 const cookie =  getCookie('jwt', { req, res });
  

    return { props: {cookie} };
    
  }; */
  

const Header = () => {
const cookieStore = cookies()
const theme = cookieStore.get('Dogus')

console.log(theme)
    return ( <>
        <section className="flex  bg-blue  p-[1rem] justify-between text-white	">
            <div className='flex space-x-4'>
<FaPaperPlane /><p>4000@dinmaegler.com</p>
<BsTelephoneFill /><p>+45 7070 4000</p></div>
<div className='flex justify-items-end '>
 
<FaUser />{theme ? <Link href={"logouthelper"}>log out</Link> : <Link  href={"loginside"}>Log ind</Link>  }
 </div>
        </section>
      <header className='flex p-[1.5rem] px-[5rem] bg-white'>
    
    <Link href={"/"}>  <Image className='' src="/maegler.png" width={296} height={89} alt='sitelogo'></Image></Link>
<Navigation />

      </header>
      </>
     );
}
 
export default Header;