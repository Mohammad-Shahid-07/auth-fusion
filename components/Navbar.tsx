import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Searchbar } from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      <div className="text-white flex items-center justify-center gap-7">
        <Link href={"/"} className=" flex items-center justify-center gap-4">
          <Image
            src={"/assets/icons/logo.svg"}
            height={50}
            width={50}
            className=""
            alt="Logo"
          />
          <p className="font-bold text-gray-200 text-2xl">Auth Fusion</p>
        </Link>

        <Link href={"/docs"} className="hover:border-b">
          Docs
        </Link>
        <Link
          href={"/github"}
          className="hover:border-b border-[#393149] hover:text-[#393149]"
        >
          Github
        </Link>
      </div>
      <div className="text-white flex items-center justify-center gap-7">
        <Searchbar />

        <Link href={"/docs"} className="hover:border-b">
          Docs
        </Link>
        <Link
          href={"/github"}
          className="hover:border-b border-[#393149] hover:text-[#393149]"
        >
          Github
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
