import React, { useState } from 'react';
import { useRouter } from 'next/router';

function ScanShipment({ userProfile }) {
  const [form, setForm] = useState({ productid: 0 });
  const date = new Date();
  const router = useRouter();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Handling submit");

    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/products`;
    const formData = new FormData();
    formData.append('data', JSON.stringify(form));

    try {
      let productID = form.productid;
      let stageInfo = [userProfile.usertype, "All steps completed", "", date.toString(), userProfile.address.toString()];

      console.log(productID);
      console.log(stageInfo);

      // Now call the API to add the product to the blockchain
      const blockchainResponse = await fetch('/api/addNewProductLocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productID: Number(form.productid),
          stageInfo: [userProfile.usertype, "All steps completed", "", date.toString(), userProfile.address.toString()],
        }),
      });

      console.log(blockchainResponse);

      if (!blockchainResponse.ok) {
        throw new Error(`Blockchain error! Status: ${blockchainResponse.status}`);
      }

      const blockchainData = await blockchainResponse.json();

      // await response.json();
      router.push('/'); // Redirect or handle success
    } catch (error) {
      console.error('Failed to scan shipment', error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Scan Shipment</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Explicitly used by farmers, distributors, and retailers before sending it further on the transport line.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="block text-center text-2xl text-gray-600 leading-8">
                    Enter the Product Id
                  </label>

                  <textarea
                    onChange={handleInputChange}
                    value={form.productid}
                    id="productid"
                    name="productid"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleSubmit}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Scan Shipment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScanShipment;
