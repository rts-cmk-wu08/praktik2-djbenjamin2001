import Image from "next/image";
import FormikForm from "@/components/Formcomp/Formikform";
import {BsTelephoneFill} from 'react-icons/bs'
import {IoIosPaperPlane} from 'react-icons/io'
import {FaMapMarkerAlt} from 'react-icons/fa'
const Kontaktside = () => {
    return ( 
        <main className="bg-white">
        <section className="bg-black">
        <Image
          src="/banner.png"
          className="relative  bg-yellow-500 opacity-40"
          width={1920}
          height={1080}
          alt="banner"
        ></Image>
        </section>
        <div className=" absolute  top-52 left-0 w-[100%] space-y-3">
        <h1 className="  text-white text-center font-bold text-5xl ">
          Kontakt os
        </h1>
      </div>
      <section className=" flex justify-center  p-5">
        <div className="flex-col space-y-8">
<h1 className="text-xl font-semibold">Vi sidder klar til at besvare dine spørgsmål</h1>
<p className="w-[45rem]">Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>

     </div> 
     </section>
     <section className="flex  justify-evenly" >
<FormikForm/>
<article className=" space-y-10 text-center">
<div className="flex-col">
    <BsTelephoneFill className="m-auto bg-blue w-[2.5rem] h-[2.5rem] p-2 text-white rounded-full"/>
    <p>Ring til os</p>
    <p>+45 7070 4000</p>
</div>
<div className=" ">
<IoIosPaperPlane className="m-auto bg-blue w-[2.5rem] h-[2.5rem] p-2 text-white rounded-full"/>
    <p>Send en mail til os</p>
    <p>4000@dinmaegler.dk</p>
</div>
<div className=" ">
<FaMapMarkerAlt className="m-auto bg-blue w-[2.5rem] h-[2.5rem] p-2 text-white rounded-full"/>
    <p>besøg butikken</p>
    <p>Stændertorvet 78,
4000 Roskilde</p>
</div>
</article>
     </section>
     <Image
          src="/map.png"
          className="pt-5 "
          width={1920}
          height={500}
          alt="map"
        ></Image>
        </main>
     );
}
 
export default Kontaktside;