import Image from "next/image";
import sidearc from "@/public/sidearc.svg"
import circle1 from "@/public/circle1.svg"
import circle2 from "@/public/circle2.svg"
import circle3 from "@/public/circle3.svg"
import jef from "@/public/jef.png"
import { lora } from '@/app/fonts'

export default function Sidearc() {
   return (
     <div className="relative min-h-[calc(100vh-284px)] text-main rat2 h-screen">
         <Image src={circle1} alt="/" className="absolute left-[13.1%] -top-[6%] -z-10 " />
         <Image src={circle2} alt="/" className="absolute left-[9%] top-[30%] -z-10" />
         <Image src={circle3} alt="/" className="absolute left-[33%] top-[12%] -z-10" />
         
         <div  className="pl-72 pt-40 z-10 text-5xl text-transparent font-bold ">
            <h1 className="text-2xl pb-2">NICK BULEN</h1>
            <div className={lora.className}>
               <h1 className="pb-2">UI/UX Designer</h1>
               <h1>Frontend developer</h1>
            </div>
         </div>
      <Image src={jef} alt="/" className="w-[60%] absolute bottom-0 left-96 -z-20" />
      <Image src={sidearc} alt="/" className="absolute right-0 bottom-0 max-w-[50%] lg:w-[40%]" />
     </div>
   )
 }
 