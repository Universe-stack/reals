import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import '../globals.css';
import Review from '../../../public/Review.png';
import teens from '../../../public/reals teens.png';
import Image from 'next/image';
import { AuthContextProvider } from '../context/AuthContext';



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
        rel: 'apple-touch-icon-precomposed',
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
        <AuthContextProvider>
          <div className='w-full'>
              <div className='w-[100%] flex justify-center align-start min-h-screen'>
                  <div className='w-[45%] bg-[#2563EB] flex'>
                      <div className='w-[75%] py-[6.87rem] flex flex-col align-start justify-between ml-[8.5rem] '>
                          <div className=''>
                              <p className = 'text-[3.60rem] text-white font-[600] leading-[4.125rem] teacking-[-0.125rem] '> Welcome to our community</p>
                              <p className= 'text-[1.10rem] font-[400] leading-[1.875rem] text-[#CBD5E1]'>Clarity gives you the blocks & components you need to create a truly professional website.</p>
                          </div>

                          <div className='flex flex-col gap-[1.87rem]'>
                              <Image src={Review} alt='' width={100} height={100} />
                              <p className='text-[1.125rem] font-[400] leading-[2.125rem] text-white'>&quot; We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.&quot;</p>
                              <div className='flex gap-[0.94rem]'>
                                  <Image src={teens} alt='' width={100} height={100} className='rounded-full w-[2.81188rem] h-[2.81188rem]'/>
                                  <span className=''>
                                      <p className='font-[600] text-[1rem] tracking-[-0.0125rem] leading-[1.75rem] text-white'> Justice Kachi</p>
                                      <p className='text-[#CBD5E1] text-[0.875rem] leading-[1.375rem]'>Founder, Reals.io</p>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='w-[55%] bg-white'>
                      {children}
                  </div>
              </div>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  )
}
