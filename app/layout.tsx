import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from 'next/font/google';
import "./globals.css";
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Les poids que vous souhaitez utiliser
  variable: '--font-poppins', // Variable CSS pour la police
});

export const metadata: Metadata = {
  title: "Découvrez FacePresence",
  description: "Révolutionnez vos pratiques de gestion de votre personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <NavBar />
        {children}

        <div id='contact'>
          <Footer />
        </div>
      </body>
    </html>
  );
}
