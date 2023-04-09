import React from 'react'
import { useState, useEffect } from 'react'
import { CaretDown, CaretRight} from 'phosphor-react'

export default function Shop() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showCategories, setShowCategories] = useState(false)
  const subCategories = () => {
    return (
      <div className='sub-categories 
      large:text-sm large:pl-3 
      md:text-base md:pl-5 md:pt-5 md:font-normal
      '>
        <p className='pb-4 '> Electronics </p>
        <p className='pb-4'> Jewelries </p>
        <p className='pb-4'> Men's Clothing </p>
        <p className='pb-4'> Women's Clothing </p>
    </div>
    )
  }

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
    <div className='flex flex-row gap-5
    md:flex-col
    '>
      <div className='basis-1/5 shrink bg-secondary-bg rounded-3xl pt-12 p-10 max-h-[400px]
      large:pr-1 large:pl-4
      md:px-10 md:p-5 md:pt-10'>
        <div className='flex justify-start'>
          {  windowWidth < 768 && showListIcon() }
          <p className='text-lg font-semibold pb-4 md:pl-4 '> 
          Categories 
          {  windowWidth < 768 && showCategories && subCategories()}
          </p>
        </div>
        {  windowWidth > 768 && subCategories()}
        
      </div>
      <div className='grow shrink-0 bg-secondary-bg rounded-3xl pt-12 p-16 min-h-screen'>
        <p className="text-3xl font-bold text-secondary">Random shop items</p>
      </div>
    </div>
  )
}
