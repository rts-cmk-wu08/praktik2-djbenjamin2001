const Nyhedsbrev = () => {
    return ( <section className='bg-gray-600 flex justify-evenly  p-[5rem] '>
    <div className='text-white flex flex-row'>
<h1 className=' text-3xl w-[540px]'>Tilmeld dig vores nyhedsbrev og 
hold dig opdateret på boligmarkedet</h1>

</div>
<form  action="">
  <input className='w-[25rem] h-[3rem]  border-2 border-gray-600  m-5  text-center' id="email" type="Email" name="email" placeholder=" Indtast din email adresse ->" />
</form> 
</section>);
}
 
export default Nyhedsbrev;