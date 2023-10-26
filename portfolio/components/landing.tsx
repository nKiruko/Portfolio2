"use client"
import Image from "next/image";
import sidearc from "@/public/sidearc.svg"
import circle1 from "@/public/circle1.svg"
import circle2 from "@/public/circle2.svg"
import circle3 from "@/public/circle3.svg"
import jef from "@/public/jef.png"
import { lora } from '@/app/fonts'
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Landing() {
   return (
     <div>
         <Image src={circle1} alt="/" className="absolute left-[13.1%] top-[1%] -z-10 w-[17rem]" />
         <Image src={circle2} alt="/" className="absolute left-[9%] top-[35%] -z-10 w-24" />
         <Image src={circle3} alt="/" className="absolute left-[33%] top-[20%] -z-10 w-14" />
         <Image src={circle3} alt="/" className="absolute right-[15%] top-[30%] -z-10 w-14" />
         <Image src={circle3} alt="/" className="absolute left-[33%] top-[85%] -z-10 w-14" />
         <Image src={circle3} alt="/" className="absolute right-[25%] top-[70%] -z-20 w-24" />
         
         <div  className="ml-72 mt-36 z-10 text-7xl font-bold">
            <h1 className="text-3xl pb-2 bg-gradient-to-r from-main from-[10%] via-black via-[11%] to-black to-100% bg-clip-text text-transparent">NICK BULEN</h1>
            <div className={lora.className}>
               <h1 className="pb-2 bg-gradient-to-r from-black from-[25%] via-main via-[30%] to-main to-100% bg-clip-text text-transparent">UI/UX Designer</h1>
               <h1 className="bg-gradient-to-r from-black from-[30%] via-main via-[35%] to-main to-100% bg-clip-text text-transparent">Frontend developer</h1>
            </div>
         </div>
         <div className="flex mt-36 mb-[7.5%]">
         <Link href="#" className="p-1 m-auto border-2 border-main rounded-full"><Icon icon="tabler:arrow-up" className="text-5xl p-1 text-main rotate-180"/></Link>
         </div>
      
      <Image src={jef} alt="/" className="w-[50%] absolute -bottom-9 left-[25rem] -z-20" />
      <Image src={sidearc} alt="/" className="absolute right-0 bottom-0 max-w-[50%] lg:w-[40%]" />
     </div>
   )
 }
 