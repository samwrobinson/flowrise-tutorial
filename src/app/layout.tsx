import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from "@/prismicio";

import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata(
): Promise<Metadata> {
 
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowrise Fallback",
    description: settings.data.meta_description || "Flowrise is the ...",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-400">
      <head>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
/>
      </head>
      <body className={clsx(montserrat)}>
        <Header />
        {children}
        <Footer />
        <script src="fslightbox.js"></script>
        </body>
    </html>
  );
}
