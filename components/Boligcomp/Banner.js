import Image from "next/image";
const Banner = () => {
    return (<>
        <div className='bg-black'>
        <Image src="/banner.png" className='relative  bg-yellow-500 opacity-40'  width={1920} height={1080} alt='banner'></Image></div>
        <section className=' absolute  top-52 left-0 w-[100%] space-y-3'>
        <h1 className='  text-white text-center font-bold text-5xl '>Boliger til salg</h1>
        </section></>
      );
}
 
export default Banner;