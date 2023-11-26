import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

const Slug = ({ product, addToCart }) => {
  const router = useRouter()
  const { slug } = router.query

  const [prodInfo, setProdInfo] = useState(null);

  const [isTrackingMenuOpen, setIsTrackingMenuOpen] = useState(false);

  // Toggle function for the tracking menu
  const toggleTrackingMenu = (e) => {
    e.preventDefault()
    setIsTrackingMenuOpen(!isTrackingMenuOpen);
  };

  useEffect(() => {
    async function fetchAndSetProductInfo() {
      try {
        const response = await fetch(`/api/displayProductInfo?productid=${product.attributes.Slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.success) {
          console.log(data.productInfo)
          setProdInfo(JSON.parse(data.productInfo));
        } else {
          throw new Error('Failed to fetch product info');
        }
      } catch (error) {
        console.error('Error fetching product info:', error);
      }
    }

    if (product && product.attributes && product.attributes.Slug) {
      fetchAndSetProductInfo();
    }
  }, [product]);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-96 md:h-96 sm:h-96 object-contain object-center rounded" src={product.attributes.ImageURL && product.attributes.ImageURL} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Agrify</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.attributes.Title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.attributes.Description}</p>
              <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <div className="relative">
                    <button
                      onClick={toggleTrackingMenu}
                      className="ml-auto text-white bg-indigo-500 border-0 mx- py-2 px-2 md:px-9 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Track Shipment
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex">

                <span className="title-font font-medium text-2xl text-gray-900">${product.attributes.Price}/-</span>
                <hr></hr>

                <div className='flex mx-2'>
                  <button onClick={() => { addToCart(slug, 1, product.attributes.Price) }} className="flex ml-auto text-white bg-indigo-500 mx-4 border-0 py-2 px-2 md:px-9 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                  <button onClick={() => { router.push('/checkout') }} className="ml-auto text-white bg-indigo-500 border-0 mx- py-2 px-2  md:px-9 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button>

                </div>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>


              {isTrackingMenuOpen && prodInfo && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="bg-white shadow-lg rounded-lg p-8  w-1/2">
                    <button
                      onClick={toggleTrackingMenu}
                      className="relative top-0 pl-[90%] m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      <svg
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                      </svg>
                    </button>
                    <h3 className="text-lg font-medium mb-2">Shipment Stages</h3>
                    <ul>
                      {/* This will map all the tracking data to li */}
                      {prodInfo?.stages?.map((stage, index) => (
                        <li key={index} className="mb-2">
                          <span className="font-semibold">Stage:</span> {stage.stageName}<br />
                          <span className="font-semibold">Notes:</span> {stage.notes}<br />
                          <span className="font-semibold">Price:</span> {stage.price}<br />
                          <span className="font-semibold">Timestamp:</span> {new Date(stage.timestamp).toLocaleString()}<br />
                          <span className="font-semibold">Location:</span> {stage.location}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}




export async function getServerSideProps(context) {


  let headers = { Authorization: "Bearer 7b025b56031cfb5cc51df3b44ab83358703ea94c7b94ec63afc68d52d2d8cf2c16d4e23046d0b95d7b20feddeff5c04033d976ae01d1be5263851ac61904f811344e0807f927c3fb167704fc940e6db12d4b32b8a3da5195ffe24f7cf9d6019a7af548131de90aed9bbef7ab1a5e8a86df09146767dd2dc2a9ab2962118f3de1" }

  let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}api/products?populate=*&filters[Slug]=` + context.query.slug, { headers: headers })
  let product = await a.json()
  return {
    props: { product: product.data[0] }, // will be passed to the page component as props
  }
}

export default Slug
