import Image from "next/image";
const Hero = () => {
    return (<>
        <div className='bg-black'>
        <Image src="/heroImg.png" className='relative  bg-yellow-500 opacity-40'  width={1920} height={1080} alt=''></Image></div>
        <section className=' absolute   bottom-40 left-0 w-[100%] space-y-3'>
        <h1 className='  text-white text-center text-5xl '>Søg efter din drømmebolig</h1>
        <div className='bg-white mx-[20rem]  p-[2rem] text-blue '>
          <p className='font-extrabold'>Søg blandt 158 boliger til salg i 74 butikker </p>
          <p>Hvad skal din næste bolig indeholde</p>
          <div className='flex space-x-4'>
          <form  action="">
            <input className='w-[45rem] h-[3rem]  border-2 border-gray-600 ' id="search" type="Search" name="query" placeholder=" Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" />
        </form> 
        <button className='bg-blue text-white p-3 w-[5rem]'>søg</button></div> 
        </div>
        </section></>
      );
}
 
export default Hero;