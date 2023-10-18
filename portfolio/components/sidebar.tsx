"use client"
import Image from "next/image";
import Link from "next/link";
import nlogo from "@/public/nlogo.png"
import { Icon } from '@iconify/react';

export default function Sidebar() {
   return (
     <div className="z-10 flex flex-col fixed items-center min-h-screen shadow-[2px_0px_5px_0px_#02458040] bg-main"> 
         <Link href="" className="p-3 mt-3 grow"><Image src={nlogo} alt="logo" className="w-16"/></Link>
         <Link href="" className="p-3"><Icon icon="mdi:github" className="text-2xl text-secondary"/></Link>
         <Link href="" className="p-3"><Icon icon="mdi:instagram"className="text-2xl text-secondary" /></Link>
         <Link href="" className="p-3"><Icon icon="mdi:linkedin" className="text-2xl text-secondary"/></Link>
         <Link href="" className="p-3 mb-20"><Icon icon="simple-icons:x" className="text-2xl text-secondary"/></Link>
     </div>
   )
 }
 