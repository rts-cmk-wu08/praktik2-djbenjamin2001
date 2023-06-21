import Link from "next/link";

import Image from "next/image";
import {IoIosMail} from "react-icons/io"
import {FaLinkedinIn} from "react-icons/fa"
const getWorkerCount = async(params) =>{
    const result = await fetch(`https://dinmaegler.onrender.com/agents?${params}`)
    if(!result.ok) {throw new Error("failed to fetch data");}
    return result.json()
  }
const Meglere = async({searchParams}) => {
    
    const query = new URLSearchParams(searchParams)
    console.log(query)
    const workerCount = await getWorkerCount(query)
    return ( 
    
    
    <>
 <div className='bg-black'>
        <Image src="/banner.png" className='relative  bg-yellow-500 opacity-40'  width={1920} height={1080} alt="workers"></Image></div>
        <section className=' absolute  top-52 left-0 w-[100%] space-y-3'>
        <h1 className='  text-white text-center font-bold text-5xl '>Medarbejdere i Roskilde</h1>
        </section>
     <section className='bg-[#F8F8FB]  '>
  <div className='w-[35rem] text-center  mx-auto pt-[3.5rem]'>
  <p className=' font-bold text-xl'>Mød vores engagerede medarbejderer</p>
  <p className=''>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>

 </div> 
 <ul className='grid grid-cols-3 '>  
  {workerCount.map(meglere =>( 
  <li  className='p-5 ' > 
<Link href={`/meglere/${meglere.id}`}> <Image src={meglere.image.url}  width={meglere.image.width} height={meglere.image.height} alt="workerimages"></Image></Link>
 <article className='bg-white space-y-5 pb-[2rem] pt-5 text-center '>
<p className="font-bold text-lg">{meglere.name}</p>
<p className="text-gray-300">{meglere.title}</p>
<div className="flex justify-center space-x-5">
<IoIosMail className="text-2xl"/>
<FaLinkedinIn className="text-2xl"/>
</div>
</article>

</li>))}</ul>
 </section>
    </> );
}
 
export default Meglere;