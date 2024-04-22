import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import NavHeading from "./NavHeading";


export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    

    return (
    <Bounded as="header" className="py-4 md:py-6 lg:py-7 bg-slate-400 bg-opacity-30 sticky top-0 z-50">
        <div className="flex items-center flex-col md:flex-row justify-between">
            <Link href="/">
                <NavHeading className="border-y-2 border-transparent hover:border-y-slate-50 py-2">MIRON GOLFMAN</NavHeading>
            </Link>
            
            <nav>
                <ul className="flex">
                    {settings.data.navigation.map(({link, label})=>(
                        <NavHeading key={label} className="ml-1.5 mr-1.5 text-teal-50">
                        <PrismicNextLink field={link} className="p-2 block transition-all duration-100 ease-in-out rounded-tl-md round-br-md border-2 border-r-4 hover:border-r-4 border-transparent hover:border-teal-50 hover:border-2">
                        {label}
                        </PrismicNextLink>
                        </NavHeading>
                    ))}
                </ul>
            </nav>
        </div>
    
    </Bounded>);
}