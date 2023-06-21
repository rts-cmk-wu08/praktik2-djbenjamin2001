"use client";
import Image from "next/image";
import { Lightbox } from "yet-another-react-lightbox";
import NextJsImage from "@/components/Detailcomp/Detail";
import SimpleReactLightbox, {
  SRLWrapper,
  useLightbox,
} from "simple-react-lightbox";
import { useState } from "react";

const getData = async (boligId) => {
  const result = await fetch(
    `https://dinmaegler.onrender.com/homes/${boligId}`
  );
  if (!result.ok) {
    throw new Error("failed to fetch data");
  }
  return await result.json();
};

const AlbumDetail = async ({ params: { boligId } }) => {
  const [open, setOpen] = useState(false);
  const details = await getData(boligId);
  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: true,
      size: '40px'
    },
    thumbnails:{
      showThumbnails: false,
    }
  }
  const slideImages = details.images.map(function (image) {
    return image.url;
  });

  return (
    <main className="bg-white text-blue">
      {" "}
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          {details.images.map((image, index)=> (
            /* skal lave classname hidden når index number typerne  ikke er 0*/
             <a key={image.id} className={
              index === 0 ? "" : "hidden"
             } href={image.url}>
             <Image 
               src={image.url}
               width={1920}
               height={1080}
               alt={details.adress1}
             />
           </a>
          ))}
       
        </SRLWrapper>
      </SimpleReactLightbox>
      <article className="bg-white space-y-4 p-2  text-blue  p-[5rem]  align-center">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">{details.adress1}</h1>
          <div>
            <button>open lightbox</button>
         
          </div>

          <p className="text-xl">
            KR. {details.price.toLocaleString("dkk").replace(",", ".")}
          </p>
        </div>
        <p>
          {details.postalcode} {details.city}
        </p>

        <div className="border border-[#7B7B7B]"></div>
        <div className="flex justify-between ">
          <section>
            <p>
              boligareal: {details.livingspace} m <sup>2</sup>
            </p>
            <p>
              grundareal: {details.lotsize} m <sup>2</sup>
            </p>
            <p>rum/værelser: {details.rooms}</p>
          </section>
          <section>
            <p>Kælder: {details.basementsize}</p>
            <p>Byggeår: {details.built}</p>
            <p>Ombygget: {details.remodel}</p>
            <p>Energimærke: {details.energylabel}</p>
          </section>
          <section>
            <p>
              udbetaing:{" "}
              {details.payment.toLocaleString("dkk").replace(",", ".")} kr{" "}
            </p>
            <p>
              Brutto ex ejerudgift:{" "}
              {details.gross.toLocaleString("dkk").replace(",", ".")} kr
            </p>
            <p>
              Netto ex ejerudgift:{" "}
              {details.netto.toLocaleString("dkk").replace(",", ".")} kr
            </p>
            <p>
              Ejerudgifter:{" "}
              {details.cost.toLocaleString("dkk").replace(",", ".")} kr
            </p>
          </section>
        </div>
        <section className="flex  justify-between">
          <div className=" mt-[10rem] ">
            <h2 className="text-2xl font-semibold">Beskrivelse</h2>
            <p className="w-[25rem] text-clip">{details.description}</p>
          </div>
          <div className="flex p-[5rem] mt-[5rem] ">
          <Image src={details.agent.image.url} width={450} height={280} alt="agent"></Image>
          <div className=" space-y-10   pl-[2rem]">
          <p>{details.agent.name}</p>
          <p className=" text-gray-400">{details.agent.title}</p>
          <p>{details.agent.phone}</p>
          <p>{details.agent.email}</p>
          </div>
          </div>
        </section>
        
      </article>
    </main>
  );
};

export default AlbumDetail;
