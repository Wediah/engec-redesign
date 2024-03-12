import Image from "next/image";


export default function Home() {
  return (
    <main className=" ">

    <div className='text-center pt-36 pb-56 bg-no-repeat pl-4 bg-cover bg-center bg-black px-4 m-6' style={{ backgroundImage: 'url(Aburi1.jpg)'}}>
        <h1 className='text-7xl lg:text-9xl font-black text-white'>ENGEC GROUP</h1>
        <h4 className='text-xl text-gray-100 pb-2 font-bold'>WE BUILD STORIES, NOT JUST STRUCTURES.</h4>  
    </div>

    <div className="bg-white text-black py-3">
      <div className=" px-4 m-6">
      <div className="justify-between flex md:text-4xl text-xl ">
        <p className="text-gray-500">OUR APPROACH</p>
        <p className="font-bold">WITH RESEARCH-DRIVEN</p>
      </div>
      <p className="text-black font-bold md:text-4xl text-xl">
      APPROACHES, WE FACTOR IN ALL YOUR NEEDS AND PRESENT YOU AN EXPERIENCE THAT FITS YOUR IMAGINATION WHETHER IT BEING A UNIQUE LANSCAPE, A BUSTLING CITY SCENARIO OR THE LIVELY PEOPLE AND THEIR MOVEMENTS.
      </p>
      <div className="flex  gap-3 ">
      <div className="w-1/4">
          <Image src="/Eastern2.webp" className="w-auto h-96 object-cover" width="160" height="1440"/>
        </div>
        <div className=" bg-gray-100 w-1/4 h-96 relative">
          <a className="font-bold p-2 cursor-pointer hover:underline absolute bottom-0 left-0 right-0 pt-80">READ ABOUT US</a>
        </div>
        
        <div className="w-1/4">
          <Image src="/Eastern3.webp" className="w-auto h-96 object-cover" width="160" height="1440"/>
        </div>
        <div className="w-1/4">
          <Image src="/Eastern6.webp" className="w-auto h-96 object-cover" width="160" height="1440"/>
        </div>
      </div>
      </div>
    </div>

    <div className="bg-white text-black py-3">
      
    </div>


    </main>
  );
}
