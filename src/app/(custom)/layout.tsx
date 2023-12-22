import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import '../globals.css';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight:'400',
  subsets:['latin-ext']
})


export const metadata: Metadata = {
  metadataBase: new URL('https://realsnetwork.vercel.app'),
  title: 'Reals',
  description: 'Become a real deal',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  colorScheme: 'dark',
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
  manifest: 'https://nextjs.org/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://example.com')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: '/apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Nav />
        
        <section className='flex'>
          <aside className='w-1/5'> <Sidebar /></aside>
          <main className='w-4/5'>
          {children}
          </main>
        </section>
      </body>
    </html>
  )
}
