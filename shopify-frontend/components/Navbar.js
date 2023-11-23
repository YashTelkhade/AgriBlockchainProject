import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import Script from 'next/script'


// const useSessionStorage = (name) => {
//   const [value, setValue] = useState('')

//   useEffect(() => {
//     setValue(sessionStorage.getItem(name))
//   }, [])

//   return value
// }

const toggleButton = (()=>{
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle("hidden");
})

const Navbar = ({ userProfile, cart , jwttoken }) => {

  const router = useRouter()
  let button;


  if (!jwttoken) {
    button = <button onClick={() => router.push('/login')} className="my-2 inline-flex items-center bg-red-600 border-0 py-1 px-4 md:py-2 md:px-6 focus:outline-none hover:bg-blue-400 rounded text-white mt-4 md:mt-0"> Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  }
  else {
    button = <div className=" sm:-mx-2">
      <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg  shadow sm:w-auto sm:mx-2 sm:mt-0">
        <button onClick={() => router.push('/userprofile')} className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r  from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
          <img className='w-6' src='https://img.icons8.com/fluency/344/portfolio.png' ></img>
          <span className="mx-2">
            My Profile
          </span>
        </button>

      </div>
    </div>

  }



  return (
    <div className='mb-1'>


      {/* <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/"><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className='w-20' src='https://img.icons8.com/clouds/452/shopping-cart-promotion.png' ></img>
            <span className="ml-3 text-xl">Shopify</span>
          </a></Link>
          <nav className="ml-auto flex flex-wrap  text-base justify-center">
            <Link href="/"><a className="mr-5 hover:text-gray-900">Home</a></Link>
            <Link href="/about"><a className="mr-5 hover:text-gray-900">About</a></Link>
            <Link href="/product"><a className="mr-5 hover:text-gray-900">Products</a></Link>
            <Link href="/contact"><a className="mr-5 hover:text-gray-900">Contact</a></Link>
            <Link href="/checkout"><a className="mr-5 hover:text-gray-900">Cart({cart.length})</a></Link>
          </nav>

          <div>{button}
        </div>

        
        </div>
      </header> */}


      <nav className="bg-white border-gray-200 px-4 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" ><a className="flex items-center">
            <img src="https://img.icons8.com/clouds/452/shopping-cart-promotion.png" className="mr-3 h-14 sm:h-24" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Agrify</span>
          </a></Link>
          <button onClick={toggleButton} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg  className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden items-center w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-2.5 md:flex-row md:space-x-12 md:mt-0 md:text-lg md:font-medium">
              
            <li>
                <Link href="/">
                <a className="mr-5">Home</a>
                </Link>
              </li>
              
              <li>
              <Link href="/about">
                <a  className="mr-5">About</a>
              </Link>
              </li>
              <li>
                <Link href="/product">
                <a  className="mr-5">Products</a>
                </Link>
              </li>

              {userProfile && userProfile.usertype === "Farmer" && (
                <li>
                  <Link href="/addproduct">
                    <a className="mr-5">Add Products</a>
                  </Link>
                </li>
              )}
              {userProfile && userProfile.usertype !== "Customer" && (
                <li>
                  <Link href="/scanshipment">
                    <a className="mr-5">Scan Shipment</a>
                  </Link>
                </li>
              )}

              <li>
              <Link href="/contact">
                <a  className="mr-5">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/checkout">
                <a  className="mr-5">Cart({cart.length})</a>
                </Link>
              </li>
              <div>{button}</div>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar