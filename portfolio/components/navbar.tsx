import Image from "next/image";
import Lines from "@/public/lines.svg"
import Link from "next/link";

export default function Navbar() {
   return (
     <nav className="flex justify-end mr-10 gap-5">
        <Link href="" className="p-5 text-lg">Work</Link>
        <Link href="" className="p-5 text-lg">About</Link>
        <Link href="" className="p-5 text-lg">Contact</Link>
        <Image src={Lines} alt="/" className="m-5 ml-16" />
     </nav>
   )
 }
 