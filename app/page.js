import Image from "next/image";
import Background from "/public/Aburi1.jpg";

export default function Home() {
  return (
    <div className="flex px-4 ">

    <div className='text-left pt-56 w-screen h-screen bg-no-repeat pl-4 bg-cover bg-center bg-black m-6' style={{ backgroundImage: 'url(Aburi1.jpg)'}}>
        <h1 className=' text-7xl lg:text-9xl font-bold text-white '>ENGEC GROUP</h1>
        <h4 className='flex text-xl text-gray-100 pb-2 font-medium'>WE BUILD STORIES, NOT JUST STRUCTURES.</h4>  
    </div>

      
    </div>
  );
}
