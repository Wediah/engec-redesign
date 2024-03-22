import React from 'react'
import { Reviews } from "../../sanity/lib/sanity.query"

async function Review() {
    const reviews = await Reviews();

  return (
    <div className="bg-white px-4 m-6">
      <div className="">
      <h1 className="text-black text-center font-bold text-xl md:text-4xl pb-4">WHAT OUR CLIENTS SAY ABOUT US</h1>
      </div>

      <div className="text-black">
            <div className='bg-white flex gap-3'>
              { reviews && reviews.map((review, index) => {
                    return (
                        <div className="w-3/5 h-3/5" key={index}>
                        <p className="text-lg font-medium text-black">{review.description}</p>
                        <h1 className="text-md font-bold text-black">{review.name}</h1>
                        </div>
                    )
                })
              }
            </div>
      </div>
      
    </div>
  )
}

export default Review