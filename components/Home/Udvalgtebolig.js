import Image from "next/image";
import Link from "next/link";
const getHomecount = async() =>{
    const result = await fetch("https://dinmaegler.onrender.com/homes?_limit=4&_start=0")
    if(!result.ok) {throw new Error("failed to fetch data");}
    return result.json()
  }
const Udvalgtbolig = async() => {
    const homeCount = await getHomecount()
  
    return ( <>
     <section className='bg-[#F8F8FB]  '>
  <div className='w-[35rem] text-center  mx-auto pt-[3.5rem]'>
  <p className=' font-bold text-xl'>Udvalgte boliger</p>
  <p className=''>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>

 </div> 
 <ul className='grid grid-cols-2 '>  
  {homeCount.map(homecounts =>( 
  <li  className='p-5 ' > 
 <Image className="object-cover w-[1400px]  h-60 " alt="homeimages" src={homecounts.images[0].url} width={homecounts.images[0].width} height={homecounts.images[0].height}></Image>
 <article className='bg-white space-y-4 p-2'>
<h1 className='font-bold text-xl'>{homecounts.adress1}</h1>
<p>{homecounts.postalcode} {homecounts.city}</p>
<p>{homecounts.type} • Ejerudgift: {homecounts.cost.toLocaleString('dkk').replace(',', '.') } kr</p>
<div className='flex flex-row justify-between'>

<p className=''>{homecounts.energylabel} 4 værelser • {homecounts.livingspace} m<sup>2</sup> </p>
<p className='text-xl'>KR. {homecounts.price.toLocaleString('dkk').replace(',', '.')}</p></div>

</article>
</li>))}</ul>
<div className='flex justify-center mb-[5rem]'>
<Link href={"boligside"}><button className='bg-blue text-white p-3 w-[10rem] mx-auto'>vis alle boliger</button></Link>
</div>
 </section>
    </> );
}
 
export default Udvalgtbolig;