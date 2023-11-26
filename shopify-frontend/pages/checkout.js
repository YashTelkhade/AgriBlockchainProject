import React, { useEffect, useState } from 'react'
import Script from 'next/script'

const Checkout = ({ cart, userProfile }) => {

  useEffect(() => {
    console.log(userProfile)
    if (userProfile != 0 && userProfile != null) {
      setform(userProfile)
    }
  })

  const [subtotal, setsubtotal] = useState(0)
  const [form, setform] = useState({ username: "", email: "", contact: "", address: "" })

  useEffect(() => {
    let mytotal = 0
    for (let index = 0; index < cart.length; index++) {
      mytotal = mytotal + cart[index][1]

    }
    setsubtotal(mytotal)
  }, [])

  const handleChange = ((e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  })

  const submit_payment = async () => {
    let orderId1 = "OID" + Math.floor(1000000 * Math.random())
    let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/order/pretransaction`
    const rawResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ orderId: orderId1.toString(), amount: subtotal, ...form, cart: cart })
    });

    const content = await rawResponse.json();

    var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
        "orderId": orderId1.toString(), /* update order id */
        "token": content.body.txnToken, /* update token value */
        "tokenType": "TXN_TOKEN",
        "amount": subtotal /* update amount */
      },
      "handler": {
        "notifyMerchant": function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        }
      }
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {

      // initialze configuration using init method 
      window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
        // after successfully updating configuration, invoke JS Checkout
        window.Paytm.CheckoutJS.invoke();
      }).catch(function onError(error) {
        console.log("error => ", error);
      });
    }

  }

  return (
    <div>

      {/* THis is the Copied Section of Paytm JS fro mtheir official website */}

      <Script id={"paytm"} type="application/javascript" crossorigin="anonymous" src={`https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.MID}.js`}> </Script>
      {/* This is the Main Section of the Contact Page */}

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
            <h2>{cart.length ? `Your items are as follows` : `Your cart is Empty!`} </h2>

            <ul key={cart.MID} className="list-decimal px-8">

              {cart.map((cartitem) => {
                return <li key={cart.MID}>
                  {cartitem[0]} with a price of {cartitem[1]}
                </li>
              })}
            </ul>

            <h2 className='font-bold'>Total Price is  {subtotal}</h2>

          </div>
          <div className="lg:w-full md:w-2/3 ">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input onChange={handleChange} type="text" id="username" name="username" value={form.username} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input onChange={handleChange} type="email" id="email" name="email" value={form.email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">contact</label>
                  <input onChange={handleChange} type="contact" id="contact" name="contact" value={form.contact} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea onChange={handleChange} id="address" name="address" value={form.address} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={submit_payment} className="flex text-white  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

export default Checkout