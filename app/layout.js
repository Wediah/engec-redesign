import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Review from "./components/review";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ENGEC GROUP",
  description: "Building stories into structures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href={inter.url} /> */}
      </head>
      <body className={inter.className}>
     
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
