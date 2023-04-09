import React from 'react'
import {Link} from 'react-router-dom'
import { Heart, MagnifyingGlass, ShoppingCartSimple, Tote } from "phosphor-react"

export default function Navbar() {
  return (
    <nav className='flex bg-primary fixed w-full align p-4 items-center mx-auto'>
      {/* logo */}
      <div className='flex text-secondary-bg font-semibold text-4xl mx-auto'>
          <Tote size={40} color="#fffcf2" className="" weight="fill" />
            <Link to="/">
              <h1 className='px-3'>Shapee</h1>
            </Link>
      </div>
      {/* Search bar */}
      <div className='flex align-bottom bg-secondary-bg w-2/4 rounded-3xl mx-auto ml-1'>
        <input type="text"
          className='h-11 w-full rounded-3xl px-4 truncate focus:outline-none'
          placeholder='Search an item here! adasdadadas'
        />
        <MagnifyingGlass size={32} color="#eb5e28" className="mx-4 my-1"/>
      </div>
      {/* hearts and cart area */}
      <div className='flex mx-auto'>
        <Link to="/">
          <Heart size={36} color="#fffcf2" className="mx-5 my-1"/>
        </Link>
        <div className='relative'>
          <Link to="/cart">
            <ShoppingCartSimple size={36} color="#fffcf2" className="mx-auto my-1"/>
            <span className="absolute top-1 right-0 bg-secondary-bg text-primary font-bold rounded-full text-white text-xs px-1">
              6
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
