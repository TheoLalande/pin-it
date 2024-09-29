import { useState, useEffect } from 'react'
import Image from 'next/image'
import Router from 'next/router'

const Landing = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true)
    const handleRouteChangeComplete = () => setLoading(false)

    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  return (
    <div className="flex w-screen h-screen bg-red-500 items-center justify-center">
      <Image src="/assets/pwaIcons/256.png" width={128} height={128} alt="logoSplashScreen" />
    </div>
  )
  // return loading ? <div className="w-screen h-screen bg-red-500">Loading...</div> : null
}

export default Landing
