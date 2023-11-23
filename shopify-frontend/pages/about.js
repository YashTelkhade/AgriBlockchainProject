import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen'>
    <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row ">
            <div className="flex justify-center xl:w-1/2">
                <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="./aboutsec.png" alt=""></img>
            </div>
            
            <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                About the Agrify Team
                </h2>

                <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">The Agrify team is a dynamic collective of professionals, each bringing a wealth of knowledge and diverse experience to the forefront of agricultural supply chain management. We are technologists, strategists, and innovators united by a shared vision to revolutionize agriculture through cutting-edge technology.
</p>
                
                <div className="mt-6 sm:-mx-2">
                    <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                        <a href="https://yashtelkhade.netlify.app/" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r  from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
                        <img className='w-6' src='https://img.icons8.com/fluency/344/portfolio.png' ></img>
                            <span className="mx-2">
                                My Portfolio
                            </span> 
                        </a>
                    </div>
                    <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                        <a href="https://www.linkedin.com/in/yash-telkhade/" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                        <img className='w-6' src='https://img.icons8.com/color/344/linkedin-circled--v1.png' ></img>
                            <span className="mx-2">
                                Connect with me on Linkedin
                            </span> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About