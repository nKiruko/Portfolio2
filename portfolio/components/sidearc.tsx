import Image from "next/image";
import sidearc from "@/public/sidearc.svg"
import circle1 from "@/public/circle1.svg"
import circle2 from "@/public/circle2.svg"
import circle3 from "@/public/circle3.svg"
import jef from "@/public/jef.png"
import { lora } from '@/app/fonts'

export default function Sidearc() {
   return (
     <div className="relative min-h-[calc(100vh-284px)]">
         <Image src={circle1} alt="/" className="absolute left-[13.1%] -top-[50%] -z-10 " />
         <Image src={circle2} alt="/" className="absolute left-[9%] top-[7%] -z-10" />
         <Image src={circle3} alt="/" className="absolute left-[33%] -top-[20%] -z-10" />
         
         <div  className="ml-72 z-10 text-7xl font-bold">
            <h1 className="text-3xl pb-2 bg-gradient-to-r from-main from-[11%] via-black via-[11%] to-black to-100% bg-clip-text text-transparent">NICK BULEN</h1>
            <div className={lora.className}>
               <h1 className="pb-2 bg-gradient-to-r from-black from-[25%] via-main via-[30%] to-main to-100% bg-clip-text text-transparent">UI/UX Designer</h1>
               <h1 className="bg-gradient-to-r from-black from-[30%] via-main via-[35%] to-main to-100% bg-clip-text text-transparent">Frontend developer</h1>
            </div>
         </div>
      <Image src={jef} alt="/" className="w-[50%] absolute bottom-0 left-[30rem] -z-20" />
      <Image src={sidearc} alt="/" className="absolute right-0 bottom-0 max-w-[50%] lg:w-[40%]" />
     </div>
   )
 }
 