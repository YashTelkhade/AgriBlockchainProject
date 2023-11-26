import React, { useState } from 'react';
import { useRouter } from 'next/router'

function addproduct({ userProfile }) {

    async function fetchNumberOfItems() {
        try {
            const response = await fetch('/api/getNumberOfItems');
            const data = await response.json();

            console.log(data)

            if (data.data.success) {
                console.log('Number of items in supply chain:', data.data.numberOfItems);
                return data.data.numberOfItems; // Assuming this is a string
            } else {
                throw new Error('Failed to fetch the number of items');
            }
        } catch (error) {
            console.error('Error fetching number of items:', error);
        }
    }


    const [form, setForm] = useState({ Title: "", Slug: "", Description: "", AvailableQTY: 0, Price: 0, ImageURL: "" });
    const [imageUrl, setImageUrl] = useState('');

    const router = useRouter();

    const handleImageUrlChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setImageUrl(e.target.value);
    };

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const numberOfItems = await fetchNumberOfItems()
        let updatedForm = ({ ...form, Slug: numberOfItems.toString() }); // Assuming you want to store the number as a string

        const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/products`;
        const formData = new FormData();
        formData.append('data', JSON.stringify(updatedForm));

        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + "95d93007cd1a30c891ad4fda71f6be8f3f03f710b51b710582da2b6e61ec660e7cffba71fb5dafb6e1cd808e1cb92c887cecd1115df7a5c00b02d63a7066991b2360f2005db9d39b0d46f61e553ec2b75095ace7926a205d084b09b3e802bfecff638dd9bd3628d2f9f482cbbd00995931dc5a0267b70122cb724a72551b6a08",
                },
                body: formData
            });


            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const product = await response.json();
            console.log('Product added successfully to Strapi');
            let productDetails = [product.data.attributes.Title.toString(), product.data.attributes.Description.toString(), product.data.attributes.Slug.toString(), product.data.attributes.AvailableQTY.toString(), product.data.attributes.ImageURL.toString()]
            let stageDetails = ["Manufactured", "All steps completed", product.data.attributes.Price.toString(), product.data.attributes.createdAt.toString(), userProfile.address.toString()]

            // Now call the API to add the product to the blockchain
            const blockchainResponse = await fetch('/api/addBlockchainItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productDetails: [product.data.attributes.Title.toString(), product.data.attributes.Description.toString(), product.data.attributes.AvailableQTY.toString(), product.data.attributes.Slug.toString(), product.data.attributes.ImageURL.toString()],
                    stageDetails: [userProfile.usertype, "All steps completed", product.data.attributes.Price.toString(), product.data.attributes.createdAt.toString(), userProfile.address.toString()]

                })
            });

            console.log(blockchainResponse)

            if (!blockchainResponse.ok) {
                throw new Error(`Blockchain error! Status: ${blockchainResponse.status}`);
            }

            const blockchainData = await blockchainResponse.json();

            // await response.json();
            console.log('Product added successfully');
            router.push('/product'); // Redirect or handle success
        } catch (error) {
            console.error('Failed to add product', error);
        }
    };


    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="mb-4">
                            <label htmlFor="image-url" className="leading-7 text-sm text-gray-600">Image URL</label>
                            <input
                                type="text"
                                id="ImageURL"
                                name="ImageURL"
                                placeholder="http://example.com/image.jpg"
                                className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleImageUrlChange}
                            />
                        </div>
                        {imageUrl && (
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image Preview</label>
                                <img src={imageUrl} alt="Preview" className="w-full h-auto rounded" />
                            </div>
                        )}
                    </div>
                    <form className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name of the Product</label>
                            <input onChange={handleInputChange} value={form.Title} type="text" id="Title" name="Title" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Price (in USD)</label>
                            <input onChange={handleInputChange} value={form.Price} type="Number" id="Price" name="Price" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Description</label>
                            <textarea onChange={handleInputChange} value={form.Description} id="Description" name="Description" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button onClick={handleSubmit} className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Add Product</button>
                        <p className="text-xs text-gray-500 mt-3">Only Farmers, Retailers and Distributors have access to this page</p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default addproduct
