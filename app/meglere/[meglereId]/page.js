
import Image from "next/image";
import FormikForm from "@/components/Formcomp/Formikform";
const getData = async (meglereId) => {
  const result = await fetch(
    `https://dinmaegler.onrender.com/agents/${meglereId}`
  );
  if (!result.ok) {
    throw new Error("failed to fetch data");
  }
  return await result.json();
};

 
const MeglerId = async ({ params: { meglereId } }) => {
 
  const workerdetails = await getData(meglereId);
  
  return (
    <main className="bg-white">
      <section className="bg-black ">
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
          Kontakt en medarbejder
        </h1>
      </div>
      <section className=" px-[15rem] py-[2.5rem] ">
        <article className="flex ">
          <Image
            src={workerdetails.image.url}
            width={workerdetails.image.width}
            height={workerdetails.image.height}
            alt="worker picture"
          ></Image>
          <div className="flex-col space-y-5 pl-5">
            <p className="font-bold text-lg">{workerdetails.name}</p>
            <p className="text-gray-300">{workerdetails.title}</p>
            <div className=" w-6 border border-[#7B7B7B]"></div>
            <p>{workerdetails.phone}</p>
            <p>{workerdetails.email}</p>
          </div>
        </article>
        <div className="py-5 space-y-8 ">
          <p className=" text-lg">Om {workerdetails.name}</p>
          <p className="w-[20rem] text-lg">{workerdetails.description}</p>
        </div>
<div className="border border-black py-5 px-5 w-[32rem] h-[35rem]">
        <h1>Kontakt {workerdetails.name}</h1>
<FormikForm/></div>
      </section>
    </main>
  );
};

export default MeglerId;
