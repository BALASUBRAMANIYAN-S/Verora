import Category from '@components/home/Category'
import FlashOffer from '@components/home/FlashOffer'
import Home from '@components/home/Home'
import InstaPage from '@components/home/InstaPage'
import Our from '@components/home/Our'
import Request from '@components/home/Request'
import YourDesign from '@components/home/YourDesign'
import React from 'react'


function home() {
  return (
   <>
            <Home />    
            <Category />
            <FlashOffer />
            <YourDesign />
            <InstaPage />
            <Our />
            <Request />
        </>
  )
}

export default home