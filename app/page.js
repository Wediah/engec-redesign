import Image from "next/image";


export default function Home() {
  return (
    <main className="  mx-auto ">

    <div className='text-center pt-36 pb-56 bg-no-repeat pl-4 bg-cover bg-center bg-black px-4 m-6' style={{ backgroundImage: 'url(Aburi1.jpg)'}}>
        <h1 className='text-7xl lg:text-9xl font-black text-white'>ENGEC GROUP</h1>
        <h4 className='text-xl text-gray-100 pb-2 font-bold'>WE BUILD STORIES, NOT JUST STRUCTURES.</h4>  
    </div>

    <div className="bg-white text-black pt-3">
      <div className=" px-4 m-6">
      <div className="justify-between flex">
        <p className="text-gray-500">OUR APPROACH</p>
        <p className="font-bold">WITH RESEARCH-DRIVEN</p>
      </div>
      <p className="text-black font-bold">
      APPROACHES, WE FACTOR IN ALL YOUR NEEDS AND PRESENT YOU AN EXPERIENCE THAT FITS YOUR IMAGINATION WHETHER IT BEING A UNIQUE LANSCAPE, A BUSTLING CITY SCENARIO OR THE LIVELY PEOPLE AND THEIR MOVEMENTS. 
      </p>
      <div className="flex gap-3 h-3/5">
        <div className="">
          <Image src="/Eastern1.webp" width="160" height="1440" />
        </div>
        <div className="">
          <p className="font-bold bottom-0">READ ABOUT US</p>
        </div>
        <div>
          <Image src="/Eastern2.webp" width="160" height="1440"/>
        </div>
        <div>
          <Image src="/Eastern3.webp" width="160" height="1440"/>
        </div>
        <div>
          <Image src="/Eastern6.webp" width="160" height="1440"/>
        </div>
      </div>
      </div>
    </div>


    </main>
  );
}
