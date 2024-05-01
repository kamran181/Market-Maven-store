import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Market-Maven Store',
  description: 'Discover the best place for all your purchases. Your  Store offers a wide range of high-quality products, including electronics, fashion, home decor, and more. Use Dropship® to design a beautiful website store with ease. Start a dropshipping business with only a few clicks! An easy-to-use online store builder trusted by millions of stores. Jumpstart your dropshipping business with us. Start your free trial today. Drop Shipping Integration. Social Media Integration. Unlimited 24/7 support. Full blogging platform.',
  keywords: 'market-maven, online store, high-quality products, great deals, electronics, fashion, home decor, Shopify, website builder, dropshipping integration,',
  author: 'kamran khan',
  image: 'https://res.cloudinary.com/do7ntibpe/image/upload/v1697378708/dropship-coming-soon.jpg',
  canonical: 'https://dropships.vercel.app',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
