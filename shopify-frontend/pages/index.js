import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {

  const router = useRouter()
  return (
    
    <div className='container md:mx-auto md:px-4'>
            <div className="rounded-lg md:h-96  overflow-hidden">
        <img alt="content" className="object-fill object-center h-full w-full" src="./Home3.png"/>
      </div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Agrify - OUR ECOM POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create and Inspired by Ψsi</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Agrify is a comprehensive application designed for agricultural supply chain management, developed using NextJs for the frontend and Strapi and Blockchain for the backend. Its key features include:</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Real-Time Product Journey Tracking</h2>
        <p className="leading-relaxed text-base mb-4">Utilizing blockchain, Agrify enables real-time tracking of agricultural products. This feature ensures all stakeholders can monitor the product's journey, guaranteeing authenticity and enhancing consumer trust.</p>
        <Link href='/login'><a  className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a></Link>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Blockchain-Enabled Transparency</h2>
        <p className="leading-relaxed text-base mb-4">At the heart of Agrify is blockchain technology, ensuring transparent and secure tracking of agricultural products from farm to market. This feature offers unparalleled visibility into the supply chain, enhancing trust and efficiency among stakeholders.</p>
        <Link href='/product'><a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a></Link>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Smart Contract Integration</h2>
        <p className="leading-relaxed text-base mb-4">Agrify utilizes smart contracts to automate transactions and agreements within the supply chain, reducing paperwork and increasing accuracy. This integration ensures compliance and streamlines operations, from order placement to delivery.</p>
        <Link href='/checkout'><a  className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a></Link>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Enhanced Traceability and Compliance</h2>
        <p className="leading-relaxed text-base mb-4">Through blockchain technology, Agrify offers enhanced traceability of agricultural products, ensuring compliance with safety standards and regulatory requirements. This feature is crucial in maintaining the integrity of the supply chain and building consumer confidence.</p>
        <Link href='https://www.postgresql.org/'><a  className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a></Link>
      </div>
    </div>
    <button onClick={()=>router.push('/product')} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start Shopping ◕.◕</button>
  </div>
</section>
    </div>

  )
}
