import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "/components/ui/sonner";
import { AuthProvider } from '@descope/nextjs-sdk';

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Home Service App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider projectId="P2iCVH05hRo3IgcvdzMJhcFuliNy">
        <div className=" mx-6 md:mx-16">
          <Header/>
          <Toaster />
        {children}
        </div>
       </AuthProvider>
        </body>
    </html>
  );
}
