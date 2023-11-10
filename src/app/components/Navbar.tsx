'use client'

import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center w-full">
        <div className="h-[3rem] flex align-middle mt-[2rem] justify-between w-[80%] self-center">
            <div className="flex text-center align-middle gap-2">
                <Image
                    src={logo}
                    width={50}
                    alt="logo"
                />
                <p className="pt-2 font-mono font-extrabold">reals</p>
            </div>
            <div className="flex">
                <ul className="flex gap-10">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/"}>About</Link></li>
                    <li><Link href={"/"}>Features </Link></li>
                    <li><Link href={"/"}>Dashboard</Link></li>
                    <li><Link href={"/"}>Pricing</Link></li>
                       
                </ul>
            </div>      
        </div>
    </nav>
  )
}

export default Navbar