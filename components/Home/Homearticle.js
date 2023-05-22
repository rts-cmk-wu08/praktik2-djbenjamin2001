import Image from "next/image";
const HomeArticle = () => {
    return ( <>
          <section className='flex space-x-8 justify-center p-[5rem]'>
    <Image src="/family.png"   width={477} height={402} alt=''></Image> 
    <article className='flex flex-col  w-[30rem] space-y-8'>
<h2  className='font-bold text-blue text-3xl '>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
<p className='text-blue text-xl font-bold'>Det synes vi siger noget om os!</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
 <section className='flex flex-row items-right justify-evenly '>
  <div className=' flex flex-col'>
  <p>4829</p>
  <p className=''> boliger solgt</p>
  </div>
  <div className='flex flex-col'>
  <p>158</p>
  <p className=''> boliger til salg</p>
  </div>
 </section>
 </article>
 </section>
 <section className='flex flex-row items-right justify-evenly mb-5 '>
  <div className=' flex flex-col'>
  <p className=' font-bold'>Bestil et salgstjek</p>
  <p className='w-[15rem]'> Med et Din Mægler Salgstjek 
bliver du opdateret på værdien 
af din bolig.</p>
  </div>
  <div className='flex flex-col'>
  <p className=' font-bold'>74 butikker</p> 
  <p className='w-[15rem]'> Hos Din Mægler er din bolig 
til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark</p>
  
  </div>
  <div className='flex flex-col p-2'>
  <p className=' font-bold'>Tilmeld køberkartotek</p>
 <p className='w-[15rem]'> Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
  </div>
 </section>
    </> );
}
 
export default HomeArticle;