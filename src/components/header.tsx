import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "./Logo";


export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
    <Bounded as="header" className="py-4 md:py-6 lg:py-4 bg-slate-400 bg-opacity-30 sticky top-0 z-10">
    <div className="flex gap-4 item-center justify-between sm:flex-row flex-col">
        <Link href="/">
            <Logo />
        </Link>
        
        <nav>
            <ul className="flex">
                {settings.data.navigation.map(({link, label})=>(
                    <li key={label} className="relative w-auto h-auto ml-1.5 mr-1.5 font-medium text-teal-50">
                    <PrismicNextLink field={link} className="p-3 block transition-all duration-300 ease-in-out  rounded-tl-md round-br-md border-r-4 border-transparent hover:border-teal-50">
                    {label}
                    </PrismicNextLink>
                    <div className="absolute inset-0 border border-r-4 rounded-tl-md rounded-br-md  border-transparent transition-all duration-300 ease-in-out hover:border-teal-50"></div>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    
    </Bounded>);
}