import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div class="bg-black">
    <div class=" gap-10 md:gap-0 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80  md:p-16 py-4 px-4 justify-between flex flex-col md:flex-row">
        <div class="flex flex-col">
            <h4 class="text-white text-5xl font-bold mb-4">ENGEC <br/> GROUP</h4>
            <div class="flex flex-row gap-2 text-3xl">
                <a href="https://www.instagram.com/archadiastudios/" class="block"><FaInstagram/></a>
                <a href="https://www.facebook.com/ArchadiaStudios" class="block"><FaFacebookF/></a>
                <a href="https://x.com/ArchadiaStudios?t=tDYh2RjnXQhOps9WkUPmvA&s=09" class="block"><FaXTwitter/></a>
                <a href="https://www.linkedin.com/company/archadia-studios/" class="block"><FaLinkedin/></a>
            </div>
        </div>
        
        <div class="flex gap-10 flex-col md:flex-row md:gap-20">
            <div class="flex flex-col gap-4">
                <div class="font-display text-white uppercase text-sm tracking-widest mb-2">Useful links</div>
                <a href="/about" class="flex items-center gap-1">About</a>
                <a href="/projects" class="flex items-center gap-1">Projects</a>
                <a href="/contact" class="flex items-center gap-1">Contact</a>
            </div>
            
            <div class="flex flex-col gap-4">
                <div class="font-display text-white uppercase text-sm tracking-widest mb-2">Contact Us</div>
                <h4 class="flex items-center gap-1">No. 14 Gye Nyame Street<br/> Accra, Ghana.</h4>
                <h4 class="flex items-center gap-1">Ghana Post GPS: GE-288-1184</h4>
                <h4 class="flex items-center gap-1">+233 (0)55 507 1746, +233 (0)50 345 6240, <br/> +233 (0)26 591 8210, +233 (0)54 338 7574, <br/> +233 (0)50 676 0395</h4>
                <h4 class="flex items-center gap-1">info@engecgroup.com</h4>
            </div>
        </div>
    </div>

    <p class="text-center text-white text-sm pb-2">2023 © Engec group. All rights reserved.</p>
</div>

  )
}

export default Footer