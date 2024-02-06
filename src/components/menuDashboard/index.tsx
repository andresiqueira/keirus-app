"use client"

import Image from "next/image";
import { usePathname } from 'next/navigation'

interface ListProps {
  label: string;
  url: string;
}

interface MenuDashboardProps {
  menuList: ListProps[];
}

const MenuDashboard = ({ menuList }: MenuDashboardProps) => {
  const pathname = usePathname()

  return (
    <nav className="bg-primary flex flex-col min-h-screen min-w-[13.625rem] pt-[3.25rem] pl-[2.5rem] gap-14 box-border overflow-hidden">
      <Image src="/logo.svg" alt="keirus logo" width="133" height="35" priority />
      <ul className=" text-white flex flex-col gap-4 text-[0.8125rem] overflow-hidden box-border">
        {menuList.map((item) => (
          <li key={item.label} className={`transition delay-100 duration-100 ease-in-out before:transition before:delay-100 before:duration-100 before:ease-in-out  after:transition after:delay-100 after:duration-100 after:ease-in-out before:content-[''] before:inline-block before:rounded-full before:mr-[0.625rem] before:w-3 before:h-3 before:hover:bg-secondary hover:text-secondary after:hover:content-arrowIcon after:ml-[0.9375rem] ${pathname === item.url ? "text-secondary" : "text-white"} ${pathname === item.url ? "before:bg-secondary" : "before:bg-white"} ${pathname === item.url ? "after:content-arrowIcon" : ""}`}><a href={item.url}>{item.label}</a></li>
        ))}
      </ul>
      <div className="flex items-center pl-1 w-[10.6875rem] h-[3.125rem] bg-[#0A1F5B] absolute bottom-4 rounded-full translate-x-[-11%]">
        <Image src="/allice.png" alt="Allice Norman" width="40" height="42" className="rounded-full w-[2.5rem] h-[2.625rem] bg-black" />
        <span className="text-white text-sm ml-2 leading-normal font-medium">Allice Norman</span>
      </div>
    </nav>
  )
}

export default MenuDashboard;