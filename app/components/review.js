import React from 'react'
import { Reviews } from "../../sanity/lib/sanity.query"

async function Review() {
    const reviews = await Reviews();

  return (
    <div className="bg-white">
      <div className="px-4">
      <h1 className="text-black text-center font-bold text-xl md:text-4xl">WHAT OUR CLIENTS SAY ABOUT US</h1>
      </div>

      <div className="text-black">
            <div className='bg-white'>
              { reviews && reviews.map((review) => {
                    return (
                        <h1 className="text-md font-bold text-black">{review.description}</h1>
                    )
                })
              }
            </div>
      </div>
      
    </div>
  )
}

export default Review