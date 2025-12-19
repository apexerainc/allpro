import {  Inter, Mulish, Raleway } from 'next/font/google'
import { lazy, Suspense } from 'react'
import './globals.css';

import Header from './_components/Header/Header'
import GlobalState from './_context'

const Footer = lazy(() => import('./_components/Footer/Footer'))
const ButtonScrollUp = lazy(() => import('./_components/Common/ButtonScrollUp'))
const FloatingActionButton = lazy(() => import('./_components/Common/FloatingActionButton'))
const SchemaMarkup = lazy(() => import('./_components/Common/SchemaMarkup'))

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '700', '800'],
	style: ['normal'],
	variable: '--base-font',
	preload: true,
	adjustFontFallback: false,
});
const mulish = Mulish({
	subsets: ['latin'],
	weight: ['800'],
	style: ['normal'],
	variable: '--base-font2',
	preload: true,
	adjustFontFallback: false,
});
const raleway = Raleway({
	subsets: ['latin'],
	weight: ['900'],
	style: ['normal'],
	variable: '--base-font3',
	preload: true,
	adjustFontFallback: false,
});
//Fonts Local Icon
import localFont from 'next/font/local'
const fontIcons = localFont({
	src:"../public/fonts-icon/fonts/font-icon.woff",
	variable: '--font-icons',
	display: 'swap',
	preload: true,
	adjustFontFallback: false,
});
export const metadata = {
  title: 'Restoration Wranglers - Water & Fire Damage Restoration | Pinedale & Sublette County WY',
  description: '24/7 emergency restoration services in Pinedale & Sublette County. Water damage, fire cleanup, mold remediation. Local experts. Masters of Disaster Cleanup. Call now!',
  keywords: 'water damage restoration Pinedale WY, fire damage cleanup Sublette County, emergency restoration Pinedale Wyoming, mold remediation Pinedale, flood cleanup Sublette County WY',
  openGraph: {
    title: 'Restoration Wranglers - Masters of Disaster Cleanup',
    description: '24/7 emergency restoration services in Pinedale & Sublette County, Wyoming',
    type: 'website',
  },
};
export const viewport = {
	themeColor: '#1a3a5c',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
}
//Script
import Script from 'next/script';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mulish.variable} ${raleway.variable} ${fontIcons.variable}`}>
			<Suspense>
				<SchemaMarkup />
			</Suspense>
			<Header />
			<GlobalState>
				{children}
			</GlobalState>
			<Suspense>
				<Footer />
				<ButtonScrollUp />
				<FloatingActionButton />
			</Suspense>
			<Script src="../js/global-main.js" strategy='lazyOnload' />
      </body>
    </html>
  )
}
