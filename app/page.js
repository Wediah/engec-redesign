
import Image from "next/image";
import { Raleway_Dots } from "next/font/google";
import Marquee from "react-fast-marquee";
import { Projects } from "../sanity/lib/sanity.query";
import React from "react";
import  ImageUrlBuilder  from "@sanity/image-url";
import { client, urlFor } from "../sanity/lib/client"
import Review from "./components/review";
import { sanityFetch } from "../sanity/lib/client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const raleway = Raleway_Dots({ 
  weight: '400',
  subsets: ['latin']
})


export default async function Home() {
  const projects = await sanityFetch({
    query: Projects,
    tags: ["projects"],
  })
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4
  // }

  return (
    <main className=" ">

    <div className='text-center pt-36 pb-56 bg-no-repeat pl-4 bg-cover bg-center bg-black' style={{ backgroundImage: 'url(Aburi1.jpg)'}}>
        <h1 className='text-7xl lg:text-9xl font-black text-white'>ENGEC GROUP</h1>
        <h4 className='text-xl text-gray-100 pb-2 font-bold'>WE BUILD STORIES, NOT JUST STRUCTURES.</h4>  
    </div>

    <div className="bg-white text-black py-3">
      <div className=" px-4 m-6">
      <div className="justify-between flex md:text-4xl text-md ">
        <p className="text-gray-500">OUR APPROACH</p>
        <p className="font-bold">WITH RESEARCH-DRIVEN</p>
      </div>
      <p className="text-black font-bold md:text-4xl text-md pb-2">
      APPROACHES, WE FACTOR IN ALL YOUR NEEDS AND PRESENT YOU AN EXPERIENCE THAT FITS YOUR IMAGINATION WHETHER IT BEING A UNIQUE LANSCAPE, A BUSTLING CITY SCENARIO OR THE LIVELY PEOPLE AND THEIR MOVEMENTS.
      </p>
      <div className="flex gap-3">
      <div className="w-1/4">
          <Image src="/Eastern2.webp" className="w-auto h-96 object-cover" width="160" height="1440"/>
        </div>
        <div className=" bg-gray-100 w-1/4 h-96 relative">
          <a className="font-bold p-2 cursor-pointer hover:underline absolute bottom-0 left-0 right-0 pt-80 md:text-lg text-md" href="/about">READ ABOUT US</a>
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
      <div className={raleway.className}>
        <Marquee className="md:text-6xl text-4xl overflow-hidden">OUR PROJECTS OUR PROJECTS OUR PROJECTS</Marquee>
      </div>

      <div className="px-4 m-6">
        <h1 className="font-bold md:text-lg text-md pb-2">FEATURED PROJECTS</h1>

        <div className='flex flex-col md:flex-row flex-wrap gap-3 pb-4' >
                { projects && projects.slice(0, 4).map((project, index) => {
                    return (
                        <a key={index} >
                            <div  className=' w-11/12 md:w-80 bg-gray-100'>
                                <Image
                                  className="object-cover bg-black"
                                  // src={project.projectImage.image}
                                  // alt={project.projectImage.alt}
                                />
                                <h1 className='text-2xl font-bold p-2'>{project.title}</h1>             
                            </div>
                        </a>
                    )
                })
                }  
            </div>
      </div>
      
      
    </div>
    <Review/>

    


    </main>
  );
}
