

import Image from "next/image";
import Boligslider from "./Boligslider";
const getHomecount = async (params) => {
  const result = await fetch(`https://dinmaegler.onrender.com/homes?${params}`);
  if (!result.ok) {
    throw new Error("failed to fetch data");
  }
  return result.json();
};

const Bolig = async ({searchParams}) => { 
  console.log("hej", searchParams)
  const query = new URLSearchParams(searchParams)
  const homeCount = await getHomecount(query);
 


  return (
    <>
      <section className=" bg-white">
        <div className="w-[35rem] text-center  mx-auto pt-[3.5rem]">
          <p className=" font-bold text-xl">Søg efter dit drømmehus</p>
          <Boligslider/>
        </div>
        <ul className="grid grid-cols-2 ">
          { homeCount.map((homecounts) => (
            <li className="p-[2.5rem] 	">
              <Image
                className="object-cover w-[1400px]  h-72 "
                src={homecounts.images[0].url}
                width={homecounts.images[0].width}
                height={homecounts.images[0].height}
              ></Image>
              <article className="bg-white space-y-4 p-2 shadow-xl">
                <h1 className="font-bold text-xl">{homecounts.adress1}</h1>
                <p>
                  {homecounts.postalcode} {homecounts.city}
                </p>
                <p>
                  {homecounts.type} • Ejerudgift:{" "}
                  {homecounts.cost.toLocaleString("dkk").replace(",", ".")} kr
                </p>
                <div className="flex flex-row justify-between">
                  <p className="">
                    {homecounts.energylabel} 4 værelser •{" "}
                    {homecounts.livingspace} m<sup>2</sup>{" "}
                  </p>
                  <p className="text-xl">
                    KR.{" "}
                    {homecounts.price.toLocaleString("dkk").replace(",", ".")}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export const dynamic = "force-dynamic"
export default Bolig;
