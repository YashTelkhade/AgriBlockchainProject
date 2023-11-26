import Link from 'next/link';
import React from 'react';

const Product = (props) => {
  if (!props.products) {
    return <div>Error loading products</div>;
  }

  return (
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Products Page</h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => (
              <div key={item.attributes.Slug} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg flex flex-col h-full">
                  <img className="h-40 rounded mb-6 object-cover object-center m-auto" src={item.attributes.ImageURL} alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Title}</h2>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">${item.attributes.Price}.00</h2>
                  <p className="leading-relaxed text-base flex-grow">{item.attributes.Description}</p>
                  <Link href={`/product/${item.attributes.Slug}`}>
                    <a className="inline-flex items-center bg-red-600 border-0 py-1 px-4 md:py-2 md:px-6 focus:outline-none hover:bg-blue-400 rounded text-white mt-4 md:mt-6">Buy Now</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const headers = { Authorization: "Bearer 7b025b56031cfb5cc51df3b44ab83358703ea94c7b94ec63afc68d52d2d8cf2c16d4e23046d0b95d7b20feddeff5c04033d976ae01d1be5263851ac61904f811344e0807f927c3fb167704fc940e6db12d4b32b8a3da5195ffe24f7cf9d6019a7af548131de90aed9bbef7ab1a5e8a86df09146767dd2dc2a9ab2962118f3de1" };

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}api/products?populate=*`, { headers });
    const products = await response.json();

    return {
      props: { products }, // will be passed to the page component as props
    };
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return {
      props: { products: null },
    };
  }
}

export default Product;
