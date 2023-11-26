import { useState, useEffect } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />

  </Head>

  const router = useRouter()
  const [cart, setcart] = useState([])
  const [jwttoken, setjwttoken] = useState(0)
  const [userProfile, setuserProfile] = useState(0)
  const [reloadKey, setReloadKey] = useState(1)
  const profileUpdate = async () => {
  let newProfile = await localStorage.getItem('userprofile')
  await setuserProfile(JSON.parse(newProfile))
  }

  useEffect(() => {
    setjwttoken(localStorage.getItem("JWT"))
    setuserProfile(JSON.parse(localStorage.getItem("userprofile")))
  }, [router.query])

  const changeLogin = async () => {
    let token = await localStorage.getItem('JWT')
    setjwttoken(token)
    setReloadKey(Math.random())
  }

  const logoutProfile = async () => {
    await localStorage.removeItem("JWT")
    await localStorage.removeItem("userprofile")
    await setjwttoken(null)
    await setuserProfile(0)
    await setReloadKey(Math.random())
    router.push("/")
  }

  const addToCart = (item, qty, price) => {


    let newCart = cart

    for (let index = 0; index < qty; index++) {
      newCart.push([item, price, qty])
    }

    setcart(newCart)

    setReloadKey(Math.random())

  }


  const removeFromCart = () => {

    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setcart(newCart)
  }

  const clearCart = () => {
    setcart([])
  }

  return <><Navbar userProfile={userProfile} key={reloadKey} cart={cart} jwttoken={jwttoken} /><Component userProfile={userProfile} cart={cart} jwttoken={jwttoken} profileUpdate={profileUpdate} changeLogin={changeLogin} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} logoutProfile={logoutProfile} /><Footer></Footer></>
}

export default MyApp
