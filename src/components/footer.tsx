import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";
import NavHeading from "./NavHeading";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <Bounded as="footer" className="py-2 md:py-6 lg:py-4 bg-slate-400 bg-opacity-30 sticky bottom-0 z-10">
            <div className="flex items-center justify-between sm:flex-row flex-col">
                <Link href="/">
                    <NavHeading>MIRON GOLFMAN</NavHeading>
                </Link>
                <p className="text-xs">© {new Date().getFullYear()} {settings.data.site_title}</p>
                <ul className="flex">
                {settings.data.navigation.map(({link, label})=>(
                    <NavHeading key={label}>
                        <PrismicNextLink field={link} className="p-3">{label}</PrismicNextLink>
                    </NavHeading>
                ))}
                </ul>
            </div>
        </Bounded>
    );
}