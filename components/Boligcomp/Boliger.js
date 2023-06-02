
import Link from "next/link";
import Image from "next/image";
import Boligslider from "./Boligslider";
const getBoliger = async (params) => {
  const result = await fetch(`https://dinmaegler.onrender.com/homes?${params}`);
  if (!result.ok) {
    throw new Error("failed to fetch data");
  }
  return result.json();
};

const Bolig = async ({searchParams}) => { 
  console.log("hej", searchParams)
  const query = new URLSearchParams(searchParams)
  console.log(query)
  const Bolig = await getBoliger(query);
 


  return (
    <>
      <section className=" bg-white">
        <div className="w-[35rem] text-center  mx-auto pt-[3.5rem]">
          <p className=" font-bold text-xl">Søg efter dit drømmehus</p>
          <Boligslider/>
        </div>
        <ul className="grid grid-cols-2 ">
          { Bolig.map((boliger) => (
            <li key={boliger.id} className="p-[2.5rem] 	">
            <Link href={`/boligside/${boliger.id}`}>  <Image
                className="object-cover w-[1400px]  h-72 "
                src={boliger.images[0].url}
                width={boliger.images[0].width}
                height={boliger.images[0].height}
                alt="images"
              ></Image> </Link>
              <article className="bg-white space-y-4 p-2 shadow-xl">
                <h1 className="font-bold text-xl">{boliger.adress1}</h1>
                <p>
                  {boliger.postalcode} {boliger.city}
                </p>
                <p>
                  {boliger.type} • Ejerudgift:{" "}
                  {boliger.cost.toLocaleString("dkk").replace(",", ".")} kr
                </p>
                <div className="flex flex-row justify-between">
                  <p className="">
                    {boliger.energylabel} 4 værelser •{" "}
                    {boliger.livingspace} m<sup>2</sup>{" "}
                  </p>
                  <p className="text-xl">
                    KR.{" "}
                    {boliger.price.toLocaleString("dkk").replace(",", ".")}
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
