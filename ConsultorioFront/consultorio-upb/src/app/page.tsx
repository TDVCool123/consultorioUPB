import Image from 'next/image'
import Link from 'next/link'
import Page from './pages/About'
import  NavBar  from './components/Navbar'
import Hero from './components/Hero'
import Tests from './pages/Tests'
import Videos from './pages/Videos'
import { Apester } from './components/Apester'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <NavBar/>
      <Hero/>
      <Videos/>
      <Tests/>
      <Apester/>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Page></Page>
        <p>
          Here's our example <Link href="./pages/About">About Us</Link> page
        </p>
      </div>
    </main>
  )
}
