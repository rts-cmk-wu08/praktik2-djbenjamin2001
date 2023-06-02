import Image from 'next/image'

import Hero from '@/components/Home/Hero'
import Udvalgtbolig from '@/components/Home/Udvalgtebolig'
import HomeArticle from '@/components/Home/Homearticle'
import Workers from '@/components/Home/Homeworkers'
import Nyhedsbrev from '@/components/Home/Homenyhedsbrev'
import App from '@/components/Home/Homeapp'
const Home = async() =>{
 
  return (<>
 <Hero/>
    <main className="flex min-h-screen flex-col justify-between pt-24 bg-white ">
<HomeArticle/>
<Udvalgtbolig/>
<Nyhedsbrev/>
<Workers/>
<App/>
    </main>
     
    </>
  )
}
export default Home