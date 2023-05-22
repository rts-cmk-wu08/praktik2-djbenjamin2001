import Image from "next/image";
import {IoIosMail} from "react-icons/io"
import {FaLinkedinIn} from "react-icons/fa"
const getWorkerCount = async() =>{
    const result = await fetch("https://dinmaegler.onrender.com/homes?_limit=3&_start=0")
    if(!result.ok) {throw new Error("failed to fetch data");}
    return result.json()
  }
const Workers = async() => {
    const workerCount = await getWorkerCount()

    return ( <>
     <section className='bg-[#F8F8FB]  '>
  <div className='w-[35rem] text-center  mx-auto pt-[3.5rem]'>
  <p className=' font-bold text-xl'>Mød vores engagerede medarbejderer</p>
  <p className=''>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>

 </div> 
 <ul className='grid grid-cols-3 '>  
  {workerCount.map(workercounts =>( 
  <li  className='p-5 ' > 
 <Image src={workercounts.agent.image.url} width={workercounts.agent.image.width} height={workercounts.agent.image.height}></Image>
 <article className='bg-white space-y-5 pb-[2rem] pt-5 text-center '>
<p className="font-bold text-lg">{workercounts.agent.name}</p>
<p className="text-gray-300">{workercounts.agent.title}</p>
<div className="flex justify-center space-x-5">
<IoIosMail className="text-2xl"/>
<FaLinkedinIn className="text-2xl"/>
</div>
</article>

</li>))}</ul>
<div className='flex justify-center mb-[5rem]'>
<button className='bg-blue text-white p-3 w-[10rem] mx-auto'>se alle mæglere</button>
</div>
 </section>
    </> );
}
 
export default Workers;