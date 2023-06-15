import {BsHouses} from 'react-icons/bs'
import Link from 'next/link';
import Navigation from './Navigation';
import {BsTelephoneFill} from 'react-icons/bs'
import {FaPaperPlane} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import Image from 'next/image';
const Footer = () => {
    return ( <>
        <footer  className='pl-[2rem] relative'>
           
      <Image className='mt-[3rem] mb-[1rem]' src="/maegler.png" width={296} height={89} alt='sitelogo'></Image>
<p className=' w-[50rem] '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>

       

        <Navigation footer />
       <section className='flex flex-col bg-white w-[25rem] left-[5rem] h-[25rem]   top-32 absolute p-[2.5rem] shadow-xl space-y-5'>
                    <div className='flex flex-row p-[1rem]  '>
<FaPaperPlane/><p>+45 7070 4000</p></div> 
<div className='flex flex-row p-[1rem]'>
<BsTelephoneFill/><p>4000@dinmaegler.com</p></div>
            <div className='flex flex-row p-[1rem] '>
<IoLocationSharp/><p>Stændertorvet 78, 4000 Roskilde</p></div>
<p className='w-[15rem]'>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>

        </section> 
       
        </footer> 
        <section className='bg-white flex p-[4rem] '>
          <div className='flex-col ml-[45rem] text-gray-400'>
          <p>medlem af </p>
          <p className='text-4xl font-bold'>DMS</p>
          <p >Dansk Mægler Sammenslutning</p>
          </div>
        </section>
        <section className='bg-blue p-[1rem]'>
 <p  className=' text-white text-center'>Layout By Jit Banik 2020</p>
        </section>
        </>
     );
}
 
export default Footer;