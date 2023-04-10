import React from 'react'
import SubCategories from './SubCategories'
import { useState, useEffect } from 'react'
import { CaretDown, CaretRight, Heart} from 'phosphor-react'

import ShopItems from './ShopItems'
export default function Shop() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showCategories, setShowCategories] = useState(false)

  // triggers caret dropdown on mobile view
  const showListIcon = () => {
    return (
      <>
      {showCategories !== true ? (
        <CaretRight
          size={28}
          weight='fill'
          className='cursor-pointer'
          onClick={() => setShowCategories(!showCategories)}
        />
      ) : 
        <CaretDown
        size={28}
        weight='fill'
        className='cursor-pointer'
        onClick={() => setShowCategories(!showCategories)}
        />  
      }
    </>
    )
  }

  // window width event listener
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
     window.removeEventListener('resize', handleResize)
    }
  }

  useEffect(() => {
    handleResize()

  },[])

  return (
    <div className='flex flex-row gap-2
    md:flex-col
    '>
      <div className='min-w-[260px] w-auto bg-secondary-bg rounded-3xl pt-12 p-10 max-h-[400px]
      shadow-md
      md:pt-10'>
        <div className='flex '>
          { windowWidth < 768 && showListIcon() }
          <p className='text-lg font-semibold pb-4 large:pl-3 md:pl-4 '> 
          Categories 
          { windowWidth < 768 && showCategories && <SubCategories/>}
          </p>
        </div>
        { windowWidth > 768 && <SubCategories/>}
      </div>
      <div className='  rounded-3xl pt-12 px-10 pb-10 '>
        <p className="text-3xl font-bold text-secondary pb-10 
        sm:text-2xl">
          Shop Items
        </p>
        {/* render shop items below */}
        <div className=' flex grow flex-wrap justify-start sm:justify-center md:justify-center gap-5 ml-5'>
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
        </div>
      </div>
    </div>
  )
}
