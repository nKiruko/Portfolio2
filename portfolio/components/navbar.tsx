import Image from "next/image";
import Lines from "@/public/lines.svg"
import Link from "next/link";

export default function Navbar() {
   return (
     <nav className="flex justify-end gap-10">
        <Link href="" className="p-5">Work</Link>
        <Link href="" className="p-5">About</Link>
        <Link href="" className="p-5">Contact</Link>
        <Image src={Lines} alt="/" />
     </nav>
   )
 }
 