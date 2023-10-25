import Image from "next/image";
import sidearc from "@/public/sidearc.svg"
import circle1 from "@/public/circle1.svg"
import circle2 from "@/public/circle2.svg"
import circle3 from "@/public/circle3.svg"
import { lora } from '@/app/fonts'

export default function Sidearc() {
   return (
     <div className="relative min-h-[calc(100vh-284px)] text-main rat2">
      <Image src={circle1} alt="/" className="absolute left-[13.1%] -top-[9.1%] -z-10 " />
      <Image src={circle2} alt="/" className="absolute left-[9%] top-[45%] -z-10" />
      <Image src={circle3} alt="/" className="absolute left-[33%] top-[22%] -z-10" />

      <div  className="pl-72 pt-40 z-10 text-5xl text-transparent font-bold ">
         <h1 className="text-2xl">NICK BULEN</h1>
         <div className={lora.className}>
            <h1>UI/UX Designer</h1>
            <h1>Frontend developer</h1>
         </div>
      </div>
        <Image src={sidearc} alt="/" className="absolute right-0 bottom-0 max-w-[50%] lg:w-[35%]" />
     </div>
   )
 }
 