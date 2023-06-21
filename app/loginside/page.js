import LoginForm from "@/components/Formcomp/LoginForm";
import Image from "next/image";
const Loginpage = () => {
    return (<main className="bg-white">
      <div className='bg-black'>
        <Image src="/banner.png" className='relative  bg-yellow-500 opacity-40'  width={2920} height={2080} alt='banner'></Image></div>
        <section className=' absolute  top-52 left-0 w-[100%] space-y-3'>
        <h1 className='  text-white text-center font-bold text-5xl '>Account login</h1>
        </section> 
  <LoginForm/>
    </main> );
}
 
export default Loginpage;