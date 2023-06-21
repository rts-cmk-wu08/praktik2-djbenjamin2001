import Image from "next/image";
const App = () => {
    return (  <section className='bg-blue flex justify-evenly pt-[5rem]'>
    <div className='text-white  space-y-8'>
<h1 className=' text-4xl w-[20rem]'>Hold dig opdateret 
på salgsprocessen</h1>
<p className='w-[35rem]'>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
</div>
<Image className=' ' alt="phone" src='/phone.png' width={436} height={425}></Image>
</section> );
}
 
export default App;