import Image from 'next/image'
import Navbar from './components/Navbar'
import { SiReact, SiNextdotjs, SiNodedotjs, SiSpring, SiPostgresql } from 'react-icons/si'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <main className='max-w-screen bg-texasDark text-texasLight'>
      <Navbar />
      <section className='font-serif uppercase mx-16 py-14  flex flex-col gap-y-80'>
        <div>
          <h2 className='text-4xl opacity-50'>The name is Sheva</h2>
          <h1 className='text-[144px] leading-none font-bold'>Gerry Sheva</h1>
        </div>
        <h2 className='text-6xl font-sans'>Software Developer</h2>
      </section>
      <section className='my-40'>
        <p className='font-sans font-light text-texasLight text-center text-xl'>A few technologies that I'm good at</p>
        {/* Icons */}
        <div className='flex flex-col mx-16 my-24 py-10 gap-y-10'>
          <div className='text-6xl flex justify-between'>
            <p>Javascript</p>
            <p>Java</p>
          </div>
          <div className='text-6xl flex justify-between'>
            <p>ReactJS</p>
            <p>Spring</p>
          </div>
          <div className='text-6xl flex justify-between'>
            <p>NodeJS</p>
            <p>SQL</p>
          </div>
        </div>
      </section>
      <section className='mx-16 my-60'>
        <h2 className='uppercase my-20 font-semibold text-9xl text-center'>Recent Projects</h2>
        <div>
          <AspectRatio ratio={16/9}>
            <Image
              src={'/jumpstart.png'}
              fill={true}
              alt='Jumpstart'
              className='rounded-xl object-cover'
            />
          </AspectRatio>
          <div className='my-10'>
            <h3 className='text-4xl'>JUMPSTART - an e-commerce web application</h3>
            <div className='flex gap-x-5 my-2'>
              <Badge variant='outline' className='text-lg border-texasLight'>ReactJS</Badge>
              <Badge variant='outline' className='text-lg border-texasLight'>NodeJS</Badge>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-16 mt-60 py-20 flex justify-between items-end'>
        <h3 className='text-9xl uppercase font-light'>Say Hello!</h3>
        <ul className='text-xl uppercase text-right'>
          <li className='mb-1 underline'><a href='https://www.linkedin.com/in/gerry-sheva-indianto-410984274/'>linkedin</a></li>
          <li>gerry.sheva@proton.me</li>
        </ul>
      </section>
    </main>
  )
}
