import Link from 'next/link'
import React from 'react'

const product = (props) => {
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
                                    <img className="h-40 rounded mb-6 object-cover object-center m-auto" src={item.attributes.ImageURL} alt="content"></img>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Title}</h2>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$.{item.attributes.Price}/-</h2>
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
}

export async function getServerSideProps(context) {

    let headers = { Authorization: "Bearer 95d93007cd1a30c891ad4fda71f6be8f3f03f710b51b710582da2b6e61ec660e7cffba71fb5dafb6e1cd808e1cb92c887cecd1115df7a5c00b02d63a7066991b2360f2005db9d39b0d46f61e553ec2b75095ace7926a205d084b09b3e802bfecff638dd9bd3628d2f9f482cbbd00995931dc5a0267b70122cb724a72551b6a08" }

    let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}api/products?populate=*`, { headers: headers })
    let products = await a.json()
    return {
        props: { products: products }, // will be passed to the page component as props
    }
}

export default product