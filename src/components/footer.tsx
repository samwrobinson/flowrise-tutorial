import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <Bounded as="footer" className="py-4 md:py-6 lg:py-4 bg-slate-400 bg-opacity-30 sticky bottom-0 z-10">
            <div className="flex gap-6 item-center justify-between sm:flex-row flex-col">
                <Link href="/">
                    <Logo />
                </Link>
                <p className="text-xs">© {new Date().getFullYear()} {settings.data.site_title}</p>
                <ul className="flex">
                {settings.data.navigation.map(({link, label})=>(
                    <li key={label}>
                        <PrismicNextLink field={link} className="p-3">{label}</PrismicNextLink>
                    </li>
                ))}
                </ul>
            </div>
        </Bounded>
    );
}