"use client"
import { oswald } from "@/app/fonts";
import Image from "next/image";
import polygon from "@/public/Polygon.svg"
import Link from "next/link";
import { motion } from "framer-motion"


export default function Footer() {
  return (
    <footer className={oswald.className}>
      <div className="bg-primary text-main">
        <div className="flex flex-row justify-center items-end gap-1">

          <div className="flex flex-col ">
            <p className="grow pb-1 pt-3 text-2xl">C O N N E C T</p>
            <div className="flex flex-row" >
                <Image src={polygon} alt="logo" className="w-5" />
                <Link href="" className="p-2 pr-48 text-2xl">LinkedIn</Link>
            </div>

            <div className="flex flex-row">
              <Image src={polygon} alt="logo" className="w-5" />
              <Link href="" className="p-2 pr-48 text-2xl">Github</Link>
            </div>
            <div className="flex flex-row">
              <Image src={polygon} alt="logo" className="w-5" />
              <Link href="" className="p-2 pr-48 text-2xl">Instagram</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image src={polygon} alt="logo" className="w-5" />
              <Link href="" className="p-2 pr-48 text-2xl">Twitter</Link>
            </div>
            <div className="flex flex-row">
              <Image src={polygon} alt="logo" className="w-5" />
              <Link href="" className="p-2 pr-48 text-2xl">Facebook</Link>
            </div>
            <div className="flex flex-row">
              <Image src={polygon} alt="logo" className="w-5" />
              <Link href="" className="p-2 pr-48 text-2xl">Youtube</Link>
            </div>
          </div>
          <div className="flex flex-col justify-center mb-4">
            <p className="text-lg ">Email</p>
            <p className="text-sm mb-3 opacity-60">nick.bulen@gmail.com</p>
            <p className="text-lg ">Phone</p>
            <p className="text-sm opacity-60">+32 468 26 37 48</p>
          </div>
        </div>
        <p className="ml-24 opacity-60">NICK BULEN © 2023</p>
      </div>
    </footer>
  )
}
