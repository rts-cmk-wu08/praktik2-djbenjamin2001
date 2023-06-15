 "use client"
 
 
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
  function Logout() {
    const router = useRouter()
    deleteCookie("Dogus")

   router.replace('/')
   router.refresh()
 };

   export default Logout