import React, { useState } from 'react'
import { useRouter } from 'next/router'


const Createaccount = () => {

    const router = useRouter()

    const [form, setform] = useState({ username: "", email: "", password: "", address: "", contact: "", usertype: "" })

    const handleChange = ((e) => {

        setform({ ...form, [e.target.name]: e.target.value })


    })

    const submit_account = async (e) => {

        e.preventDefault()


        let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/auth/local/register`

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + "95d93007cd1a30c891ad4fda71f6be8f3f03f710b51b710582da2b6e61ec660e7cffba71fb5dafb6e1cd808e1cb92c887cecd1115df7a5c00b02d63a7066991b2360f2005db9d39b0d46f61e553ec2b75095ace7926a205d084b09b3e802bfecff638dd9bd3628d2f9f482cbbd00995931dc5a0267b70122cb724a72551b6a08",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });


        const content = await rawResponse.json().then(function onSuccess() {

            router.push('/login')

        }).catch(function onError(error) {
            console.log("error => ", error);
        });

    }

    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" }}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-4xl font-bold text-white">Agrify</h2>

                                <p className="max-w-xl mt-3 text-gray-300">Welcome to our Ecom Platform. SignIn/Register to shop. </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Agrify</h2>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Create your account</p>
                            </div>

                            <div className="mt-8">
                                <form>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                        <input type="text" onChange={handleChange} value={form.username} name="username" id="username" placeholder="Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Address</label>
                                        <input type="text" onChange={handleChange} value={form.address} name="address" id="address" placeholder="Your Address" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    
                                    <div className="mt-6">
                                        <label htmlFor="userType" className="block mb-4 text-sm text-gray-600 dark:text-gray-200">User Type</label>
                                        <select
                                            id="userType"
                                            name="usertype"
                                            onChange={handleChange}
                                            value={form.usertype}
                                            className="block w-full text-sm px-4 py-2 mt-4  text-gray-600 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                                        >
                                            <option value="">Select User Type</option>
                                            <option value="Customer">Customer</option>
                                            <option value="Retailer">Retailer</option>
                                            <option value="Distributor">Distributor</option>
                                            <option value="Farmer">Farmer</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="name" className="block mt-4 mb-2 text-sm text-gray-600 dark:text-gray-200">Contact Number</label>
                                        <input type="text" onChange={handleChange} value={form.contact} name="contact" id="contact" placeholder="Your Contact Number" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="mt-6">

                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input onChange={handleChange} id="email" name="email" value={form.email} type="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        </div>

                                        <input type="password" onChange={handleChange} id="password" name="password" value={form.password} placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="mt-6">
                                        <button onClick={submit_account}
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Create Account
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createaccount